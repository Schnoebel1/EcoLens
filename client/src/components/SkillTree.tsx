import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactFlow, { Edge, Node, Background, ReactFlowInstance } from 'reactflow';
import dagre from 'dagre';
import 'reactflow/dist/style.css';
import { skillTreeData } from '../data/skillTreeData'; // Importiere die Daten aus der separaten Datei
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Funktion zum Bestimmen der Positionen mit dem dagre-Layout
const getPosition = (nodes: Node[]) => {
  const g = new dagre.graphlib.Graph();
  g.setGraph({
    rankdir: 'TB', // Top to Bottom Layout
  });
  g.setDefaultEdgeLabel(() => ({}));

  // Knoten hinzufügen und Verbindungen erstellen
  nodes.forEach((node) => {
    g.setNode(node.id, { width: 200, height: 100 });  // Knoten Größe festlegen
    node.data?.connections?.forEach((connectionId: string) => { // Verbindungstyp explizit definieren
      g.setEdge(node.id, connectionId);
    });
  });

  // Layout berechnen
  dagre.layout(g);

  // Die berechneten Positionen zurückgeben, dabei Y-Achse umkehren und anpassen
  return nodes.map((node) => {
    const { x, y } = g.node(node.id); // Positionen aus dagre holen
    return {
      ...node,
      position: { x, y: y * 1.2 },  // Die Y-Position skalieren, um die Knoten dichter zusammenzubringen
    };
  });
};

const SkillTree: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // React Router hook zum Navigieren

  const reactFlowWrapper = useRef<HTMLDivElement>(null); // Ref für das div
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null);  // Ref für die ReactFlow-Instanz

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Memoize the nodeTypes and edgeTypes
  const nodeTypes = useMemo(() => ({}), []);
  const edgeTypes = useMemo(() => ({}), []);

  useEffect(() => {
    const nodesData: Node[] = skillTreeData.map((node) => ({
      id: node.id,
      data: {
        label: node.name,
        name: node.name,
        image: node.image,
        description: node.description,
        difficulty: node.difficulty,
        prerequisites: node.prerequisites,
        youtubeLink: node.youtubeLink,
        connections: node.connections, // Sicherstellen, dass Verbindungen mitgegeben werden
      },
      style: {
        padding: 10,
        backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff', // Farben aus dem Theme verwenden
        border: `1px solid ${theme.palette.mode === 'dark' ? '#666' : '#ccc'}`,
        borderRadius: 10,
        color: theme.palette.mode === 'dark' ? '#fff' : '#000', // Textfarbe abhängig vom Modus
        boxShadow: `0 2px 4px ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`,
      },
      position: { x: 0, y: 0 }, // Position initialisieren, bevor dagre sie anpasst
    }));

    const edgesData: Edge[] = skillTreeData.flatMap((node) =>
      node.connections.map((connectionId: string) => ({
        id: `${node.id}-${connectionId}`,
        source: node.id,
        target: connectionId,
        animated: true,
        style: {
          stroke: theme.palette.mode === 'dark' ? '#FFEB3B' : '#FBC02D', // Verbindungslinienfarbe
          strokeWidth: 2,
          opacity: 0.7,
        },
      }))
    );

    setEdges(edgesData);
    setNodes(getPosition(nodesData)); // Positionen nach dagre anpassen
  }, [theme.palette.mode]);

  // Suche den Root-Node (z. B. den ersten Knoten ohne Verbindungen oder das Root-Element)
  const findRootNode = (nodes: Node[]) => {
    return nodes.find((node) => !node.data?.connections || node.data.connections.length === 0);
  };

  // Bei der Initialisierung den Root-Node fokussieren
  useEffect(() => {
    if (nodes.length > 0 && reactFlowInstance.current) {
      const rootNode = findRootNode(nodes);
      if (rootNode) {
        reactFlowInstance.current.fitView({ nodes: [rootNode], padding: 0.2 });  // Sicht auf den Root-Node fokussieren
      }
    }
  }, [nodes]);

  const handleNodeClick = (_event: React.MouseEvent, node: Node) => {
    // Debug-Ausgabe der Node in der Konsole
    console.log('Clicked Node:', node);
    // Navigiere zur 'exercises' Seite und übergib nur die Übung (keine Events)
    navigate('/exercises', { state: { selectedExercise: node } });
  };
  

  return (
    <div style={{ height: 600 }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes} // Memoized value
        edgeTypes={edgeTypes} // Memoized value
        fitView // Automatisches Anpassen der Ansicht
      >
        <Background color={theme.palette.mode === 'dark' ? '#333' : '#f1f1f1'} gap={16} />
      </ReactFlow>
    </div>
  );
};

export default SkillTree;

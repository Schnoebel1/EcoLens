import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';

// Hier benennen wir das Interface als Named Export
export interface SkillTreeNodeProps {
  name: string;
  description: string;
  difficulty: number;
  prerequisites: string[];
  youtubeLink: string;
  connections: string[]; // IDs der vorherigen Übungskomponenten
  image?: string; // Optional: Bild-URL
}

const SkillTreeNode: React.FC<SkillTreeNodeProps> = ({
  name,
  description,
  difficulty,
  prerequisites,
  youtubeLink,
  connections,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const renderStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < difficulty ? 'text-yellow-400' : 'text-gray-400'}>
        ★
      </span>
    ));
  };

  return (
    <div
      onClick={toggleDetails}
      className={`relative flex flex-col items-center p-4 border rounded-full cursor-pointer w-32 mx-auto ${
        theme.palette.mode === 'dark' ? 'dark:border-gray-700' : 'border-gray-300'
      }`}
    >
      {connections.length > 0 && (
        <div
          className={`absolute top-1/2 left-0 transform -translate-x-2 w-0.5 ${
            theme.palette.mode === 'dark' ? 'bg-gray-300' : 'bg-gray-500'
          } h-full`}
        ></div>
      )}

      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className={`relative flex items-center justify-center w-16 h-16 ${
            theme.palette.mode === 'dark' ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'
          } rounded-full`}
        >
          <span className="text-sm font-semibold">{name}</span>
        </div>

        <div className="text-sm">{renderStars(difficulty)}</div>
      </div>

      {isOpen && (
        <div className="mt-4">
          <p className="text-sm">{description}</p>
          <p className="text-sm font-semibold mt-2">Voraussetzungen:</p>
          <ul className="list-disc pl-4">
            {prerequisites.map((prerequisite, index) => (
              <li key={index} className="text-sm">{prerequisite}</li>
            ))}
          </ul>
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-blue-500 ${theme.palette.mode === 'dark' ? 'dark:text-blue-300' : 'text-blue-500'}`}
          >
            YouTube Tutorial
          </a>
        </div>
      )}
    </div>
  );
};

export default SkillTreeNode;

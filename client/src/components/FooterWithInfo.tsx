import React from 'react';
import { useTheme } from '@mui/material/styles';

const FooterWithInfo: React.FC = () => {
  const theme = useTheme();

  return (
    <footer
      style={{
        backgroundColor: theme.palette.background.paper, // Background color based on the theme
        color: theme.palette.text.primary, // Text color based on the theme
        paddingTop: '30px',
        paddingBottom: '30px',
      }}
    >
      <div className="max-w-screen-xl mx-auto space-y-6 text-center">
        {/* Links Section */}
        <div>
          <h3
            style={{
              fontSize: '1.25rem', // Larger font size for the title
              fontWeight: 600,
              color: theme.palette.text.primary, // Title text color
            }}
          >
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/impressum"
                style={{
                  color: theme.palette.text.secondary, // Link color based on the theme
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                }}
              >
                Impressum
              </a>
            </li>
            <li>
              <a
                href="/datenschutz"
                style={{
                  color: theme.palette.text.secondary, // Link color based on the theme
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                }}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/agb"
                style={{
                  color: theme.palette.text.secondary, // Link color based on the theme
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                }}
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Follow Us
          </h3>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://facebook.com"
              style={{
                color: theme.palette.text.primary,
                fontSize: '1.5rem',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://twitter.com"
              style={{
                color: theme.palette.text.primary,
                fontSize: '1.5rem',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x"></i> {/* X (formerly Twitter) Icon */}
            </a>
            <a
              href="https://instagram.com"
              style={{
                color: theme.palette.text.primary,
                fontSize: '1.5rem',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              style={{
                color: theme.palette.text.primary,
                fontSize: '1.5rem',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Contact
          </h3>
          <p>
            Have questions?{' '}
            <a
              href="mailto:info@domain.com"
              style={{
                color: theme.palette.warning.main, // Using accent color for the contact link
                textDecoration: 'underline',
              }}
            >
              Contact us
            </a>
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: `1px solid ${theme.palette.divider}`, // Divider line based on the theme
          marginTop: '30px',
          paddingTop: '20px',
        }}
      >
        <p
          style={{
            fontSize: '0.875rem',
            color: theme.palette.text.secondary, // Text color for the copyright notice
            marginBottom: '60px',
            textAlign: 'center', // Centering the copyright text
          }}
        >
          © 2024 CST - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterWithInfo;

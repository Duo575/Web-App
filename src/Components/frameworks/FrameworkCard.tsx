import React from 'react';
import './FrameworkCard.css';

/**
 * A single framework or tool to display in the frameworks section.
 */
export interface Framework {
  /**
   * The name of the framework.
   */
  name?: string;

  /**
   * A string representing the URL of the logo in SVG format.
   */
  logo?: string;

  /**
   * A string representing the hex color of the glow effect.
   */
  color?: string;

  /**
   * A string representing the URL of the framework/tool's homepage.
   */
  url?: string;

  /**
   * Whether the framework card is visible or not.
   */
  visible: boolean;
}

interface FrameworkCardProps {
  framework?: Framework;
}

const FrameworkCard: React.FC<FrameworkCardProps> = ({ 
  framework = { visible: true } 
}) => {
  const Component = framework?.url ? 'a' : 'div';
  const hasImage = Boolean(framework?.logo);
  
  const className = [
    'framework-card',
    framework?.visible ? 'active' : '',
    hasImage ? 'has-image' : 'no-image'
  ].filter(Boolean).join(' ');
  
  return (
    <Component
      {...(framework?.url && {
        href: framework.url,
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      className={className}
      style={{ 
        '--glow-color': framework?.color || 'rgba(0, 0, 0, 0)' 
      } as React.CSSProperties & { '--glow-color': string }}
    >
      {framework?.logo && (
        <img
          src={framework.logo}
          alt={framework.name || 'Framework logo'}
          draggable={false}
        />
      )}
    </Component>
  );
};

export default FrameworkCard;
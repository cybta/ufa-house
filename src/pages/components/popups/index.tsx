import { useEffect, useRef } from 'react';
import Kitchen from './rooms/Kitchen';
import Desk from './rooms/Desk';

interface InterActionPopupProps {
  room: string;
  setShowOverlay: (value: boolean) => void;
  // Match the state type from App.tsx
  canvasEl: HTMLCanvasElement | null;
}

// 1. Destructure canvasRef here
const InterActionPopup = ({
  room,
  setShowOverlay,
  canvasEl,
}: InterActionPopupProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the UI so it can capture the Escape key immediately
    containerRef.current?.focus();

    console.log('Room', room);

    const handlePointerLockChange = () => {
      if (document.pointerLockElement === null) {
        setShowOverlay(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowOverlay(false);
      }
    };

    document.addEventListener('pointerlockchange', handlePointerLockChange);
    window.addEventListener('keydown', handleKeyDown);

    // 2. The Cleanup Function: Runs when the popup is removed from the DOM
    return () => {
      document.removeEventListener(
        'pointerlockchange',
        handlePointerLockChange
      );
      window.removeEventListener('keydown', handleKeyDown);

      // 3. Use .current to access the actual canvas element
      setTimeout(() => {
        canvasEl?.focus();
      }, 0);
    };
  }, [setShowOverlay, canvasEl]); // Add canvasRef to dependencies

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      style={{ outline: 'none' }}
      className='popup-content'
    >
      {room === 'kitchen' && <Kitchen />}
      {room === 'desk' && <Desk />}
    </div>
  );
};

export default InterActionPopup;

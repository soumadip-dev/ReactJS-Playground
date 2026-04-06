import type { ReactNode } from 'react';

interface HintBoxProps {
  mode: 'hint';
  children: ReactNode;
}
interface WarningBoxProps {
  mode: 'warning';
  severity?: 'low' | 'medium' | 'high';
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  // We cannot directly destructure all props because we don't know yet
  // whether mode is 'hint' or 'warning'. Therefore, severity could be
  // either undefined or 'low' | 'medium' | 'high'.

  const { children, mode } = props;
  // We can safely destructure mode and children, but we cannot
  // destructure severity yet because TypeScript does not know
  // if this is a WarningBoxProps object.

  if (mode === 'hint') {
    return (
      <aside className="infoBox infoBox-hint">
        <h2>Hint</h2>
        <p>{children}</p>
      </aside>
    );
  }

  // Here TypeScript understands that if mode is 'warning',
  // then props must be of type WarningBoxProps.
  const { severity } = props;

  return (
    <aside className={`infoBox infoBox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}

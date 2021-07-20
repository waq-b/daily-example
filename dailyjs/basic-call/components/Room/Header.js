import React, { useMemo } from 'react';
import HeaderCapsule from '@dailyjs/shared/components/HeaderCapsule';
import { useParticipants } from '@dailyjs/shared/contexts/ParticipantsProvider';
import { useUIState } from '@dailyjs/shared/contexts/UIStateProvider';

export const Header = () => {
  const { participantCount } = useParticipants();
  const { customCapsule } = useUIState();

  return useMemo(
    () => (
      <header className="room-header">
        <img src="assets/daily-logo.svg" alt="Daily" className="logo" />

        <HeaderCapsule>Basic call demo</HeaderCapsule>
        <HeaderCapsule>
          {`${participantCount} ${
            participantCount === 1 ? 'participant' : 'participants'
          }`}
        </HeaderCapsule>
        {customCapsule && (
          <HeaderCapsule variant={customCapsule.variant}>
            {customCapsule.variant === 'recording' && <span />}
            {customCapsule.label}
          </HeaderCapsule>
        )}

        <style jsx>{`
          .room-header {
            display: flex;
            flex: 0 0 auto;
            column-gap: var(--spacing-xxs);
            box-sizing: border-box;
            padding: var(--spacing-sm);
            align-items: center;
            width: 100%;
          }

          .logo {
            margin-right: var(--spacing-xs);
          }
        `}</style>
      </header>
    ),
    [participantCount, customCapsule]
  );
};

export default Header;

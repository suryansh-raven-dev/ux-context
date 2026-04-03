import Typography from '@mui/material/Typography';

import './StatusStepper.css';

export type StatusStepperProps = {
  steps: { label: string; completed?: boolean; active?: boolean }[];
};

/**
 * Vertical workflow stepper for incident or review states.
 */
export function StatusStepper({ steps }: StatusStepperProps) {
  return (
    <ol className="raven-status-stepper">
      {steps.map((step, index) => {
        const isActive = Boolean(step.active);
        const isCompleted = Boolean(step.completed);
        const isUpcoming = !isActive && !isCompleted;

        const dotClass = [
          'raven-status-stepper__dot',
          isUpcoming ? 'raven-status-stepper__dot--upcoming' : 'raven-status-stepper__dot--active',
        ].join(' ');

        const labelClass = [
          'raven-status-stepper__label',
          isActive ? 'raven-status-stepper__label--active' : '',
          isUpcoming ? 'raven-status-stepper__label--muted' : '',
        ]
          .filter(Boolean)
          .join(' ');

        const showConnector = index < steps.length - 1;
        const connectorComplete = isCompleted || isActive;

        return (
          <li key={`${index}-${step.label}`} className="raven-status-stepper__step">
            <div className="raven-status-stepper__track" aria-hidden>
              <span className={dotClass} />
              {showConnector ? (
                <span
                  className={[
                    'raven-status-stepper__connector',
                    connectorComplete ? 'raven-status-stepper__connector--complete' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                />
              ) : null}
            </div>
            <Typography
              variant="body2"
              component="span"
              className={labelClass}
              color={isUpcoming ? 'text.secondary' : 'text.primary'}
            >
              {step.label}
            </Typography>
          </li>
        );
      })}
    </ol>
  );
}

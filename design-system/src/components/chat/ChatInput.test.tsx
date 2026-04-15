import { useState } from 'react';
import type { ReactElement } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';

import { ravenNearMissTheme } from '../../theme/ravenNearMissTheme';

import { ChatInput } from './ChatInput';

function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={ravenNearMissTheme}>{ui}</ThemeProvider>);
}

function ControlledChatInput(props: { multiline?: boolean }) {
  const [value, setValue] = useState('');
  return (
    <ChatInput
      value={value}
      onChange={setValue}
      onSend={() => {
        /* noop */
      }}
      multiline={props.multiline}
    />
  );
}

describe('ChatInput', () => {
  it('renders the input with default placeholder and aria-label', () => {
    renderWithTheme(
      <ChatInput value="" onChange={() => {}} onSend={() => {}} />
    );

    const field = screen.getByRole('textbox', { name: 'Message' });
    expect(field).toHaveAttribute('placeholder', 'Message');
  });

  it('updates the message when typing', async () => {
    const user = userEvent.setup();

    function Harness() {
      const [v, setV] = useState('');
      return (
        <>
          <ChatInput value={v} onChange={setV} onSend={() => {}} />
          <span data-testid="mirror">{v}</span>
        </>
      );
    }

    renderWithTheme(<Harness />);

    await user.type(screen.getByRole('textbox', { name: 'Message' }), 'hello');
    expect(screen.getByTestId('mirror')).toHaveTextContent('hello');
  });

  it('calls onSend when Send is activated with non-empty text', async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();

    renderWithTheme(<ChatInput value="Hi" onChange={() => {}} onSend={onSend} />);

    await user.click(screen.getByRole('button', { name: 'Send message' }));
    expect(onSend).toHaveBeenCalledTimes(1);
  });

  it('shows Voice message control when empty', () => {
    renderWithTheme(<ChatInput value="" onChange={() => {}} onSend={() => {}} />);

    expect(screen.getByRole('button', { name: 'Voice message' })).toBeInTheDocument();
  });

  it('multiline layout shows attach and voice regions', () => {
    renderWithTheme(<ControlledChatInput multiline />);

    const attachButtons = screen.getAllByRole('button', { name: 'Attach file' });
    expect(attachButtons.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('button', { name: 'Voice message' })).toBeInTheDocument();
  });
});

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RavenRadioGroup } from './RavenRadioGroup';

const meta: Meta<typeof RavenRadioGroup> = {
  title: 'Components/Inputs/Radio Group',
  component: RavenRadioGroup,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RavenRadioGroup>;

const severityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
];

export const Default: Story = {
  args: {
    label: 'Severity',
    options: severityOptions,
    value: 'medium',
  },
};

export const Row: Story = {
  args: {
    label: 'Layout direction',
    options: severityOptions,
    value: 'low',
    row: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Priority',
    options: [
      { value: 'p0', label: 'P0 – Blocker' },
      { value: 'p1', label: 'P1 – Critical' },
      { value: 'p2', label: 'P2 – Major' },
      { value: 'p3', label: 'P3 – Minor', disabled: true },
    ],
    value: 'p1',
  },
};

export const Controlled: Story = {
  render: function ControlledRadio() {
    const [val, setVal] = useState('medium');
    return (
      <div>
        <RavenRadioGroup
          label="Severity"
          options={severityOptions}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <p style={{ marginTop: 16 }}>Selected: {val}</p>
      </div>
    );
  },
};

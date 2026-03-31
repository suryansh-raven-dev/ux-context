import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenRadioGroup } from './RavenRadioGroup';
import type { RavenRadioGroupProps } from './RavenRadioGroup';

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

const Default: Story = {
  args: {
    label: 'Severity',
    options: severityOptions,
    value: 'medium',
  },
};

const Row: Story = {
  args: {
    label: 'Layout direction',
    options: severityOptions,
    value: 'low',
    row: true,
  },
};

const WithDisabledOption: Story = {
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

const Controlled: Story = {
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

function renderStory(story: Story) {
  if (story.render) {
    return story.render({ ...(story.args ?? {}) } as never, {} as never);
  }
  if (story.args) {
    return <RavenRadioGroup {...(story.args as RavenRadioGroupProps)} />;
  }
  return null;
}

export const RadioGroup: Story = {
  name: 'Radio Group',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Default">{renderStory(Default)}</StorybookSection>
      <StorybookSection title="Row">{renderStory(Row)}</StorybookSection>
      <StorybookSection title="With Disabled Option">{renderStory(WithDisabledOption)}</StorybookSection>
      <StorybookSection title="Controlled">{renderStory(Controlled)}</StorybookSection>
    </StorybookPage>
  ),
};

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiRating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderRounded';
import StarIcon from '@mui/icons-material/StarRounded';
import StarBorderIcon from '@mui/icons-material/StarBorderRounded';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfiedRounded';

import { StorybookPage, StorybookSection } from '../../StorybookPage';
import { RavenRating } from './RavenRating';

const labels: Record<number, string> = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default {
  title: 'Components/Inputs/Rating',
  component: RavenRating,
  parameters: {
    docs: {
      description: {
        component:
          'Raven-styled Rating component wrapping MUI v6 Rating. Uses the Near-Miss ' +
          'deep purple (#4A148C) for filled stars and purple-800 (#6A1B9A) for hover. ' +
          'Supports half-star precision, custom icons, sizes, read-only mode, hover ' +
          'feedback labels, and configurable max stars. Ideal for severity scoring, ' +
          'risk assessment, and feedback collection.',
      },
    },
  },
} satisfies Meta<typeof RavenRating>;

type Story = StoryObj<typeof RavenRating>;

const roundedRatingIcons = {
  icon: <StarIcon fontSize="inherit" />,
  emptyIcon: <StarBorderIcon fontSize="inherit" />,
};

/* ─── Basic ─────────────────────────────────────────────── */

const Basic: Story = {
  name: 'Basic',
  render: () => {
    const [value, setValue] = useState<number | null>(3);
    return (
      <Stack spacing={2}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Controlled
          </Typography>
          <MuiRating {...roundedRatingIcons} value={value} onChange={(_, newVal) => setValue(newVal)} />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Read Only
          </Typography>
          <MuiRating {...roundedRatingIcons} value={4} readOnly />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Disabled
          </Typography>
          <MuiRating {...roundedRatingIcons} value={2} disabled />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            No Rating
          </Typography>
          <MuiRating {...roundedRatingIcons} value={null} />
        </Box>
      </Stack>
    );
  },
};

/* ─── Precision ─────────────────────────────────────────── */

const HalfPrecision: Story = {
  name: 'Half Precision',
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Half-star precision (0.5)
        </Typography>
        <MuiRating {...roundedRatingIcons} defaultValue={2.5} precision={0.5} />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Read-only half values
        </Typography>
        <Stack spacing={1}>
          <MuiRating {...roundedRatingIcons} value={3.5} precision={0.5} readOnly />
          <MuiRating {...roundedRatingIcons} value={4.5} precision={0.5} readOnly />
          <MuiRating {...roundedRatingIcons} value={1.5} precision={0.5} readOnly />
        </Stack>
      </Box>
    </Stack>
  ),
};

/* ─── Sizes ─────────────────────────────────────────────── */

const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <Stack spacing={2}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <Box key={size}>
          <Typography variant="subtitle2" gutterBottom>
            {size}
          </Typography>
          <MuiRating {...roundedRatingIcons} defaultValue={3} size={size} />
        </Box>
      ))}
    </Stack>
  ),
};

/* ─── Hover Feedback ────────────────────────────────────── */

const HoverFeedback: Story = {
  name: 'Hover Feedback',
  render: () => {
    const [value, setValue] = useState<number | null>(3);
    const [hover, setHover] = useState(-1);
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <MuiRating
          {...roundedRatingIcons}
          value={value}
          precision={0.5}
          onChange={(_, newVal) => setValue(newVal)}
          onChangeActive={(_, newHover) => setHover(newHover)}
          emptyIcon={<StarBorderIcon style={{ opacity: 0.3 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Typography variant="body2">
            {labels[hover !== -1 ? hover : value]}
          </Typography>
        )}
      </Box>
    );
  },
};

/* ─── Custom Icons ──────────────────────────────────────── */

const CustomIcons: Story = {
  name: 'Custom Icons',
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Heart Icons
        </Typography>
        <MuiRating
          defaultValue={3}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          sx={{
            '& .MuiRating-iconFilled': { color: '#F44336' },
            '& .MuiRating-iconHover': { color: '#D32F2F' },
          }}
        />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Sentiment Icons (10-star scale)
        </Typography>
        <MuiRating
          defaultValue={3}
          max={5}
          IconContainerComponent={({ value: v, ...rest }) => {
            const icons: Record<number, React.ReactElement> = {
              1: <SentimentVeryDissatisfiedIcon />,
              2: <SentimentDissatisfiedIcon />,
              3: <SentimentSatisfiedIcon />,
              4: <SentimentSatisfiedAltIcon />,
              5: <SentimentVerySatisfiedIcon />,
            };
            return <span {...rest}>{icons[v!]}</span>;
          }}
          highlightSelectedOnly
        />
      </Box>
    </Stack>
  ),
};

/* ─── Max Stars ─────────────────────────────────────────── */

const MaxStars: Story = {
  name: 'Max Stars',
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          3-star scale
        </Typography>
        <MuiRating {...roundedRatingIcons} defaultValue={2} max={3} />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          10-star scale
        </Typography>
        <MuiRating {...roundedRatingIcons} defaultValue={7} max={10} />
      </Box>
    </Stack>
  ),
};

/* ─── Raven Product Patterns ────────────────────────────── */

const RavenProductPatterns: Story = {
  name: 'Raven Product Patterns',
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Severity Assessment
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Rate the severity of the near-miss incident (1 = negligible, 5 = critical)
        </Typography>
        <MuiRating {...roundedRatingIcons} defaultValue={3} size="large" />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Risk Likelihood
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          How likely is recurrence? (half-star precision)
        </Typography>
        <MuiRating {...roundedRatingIcons} defaultValue={2.5} precision={0.5} size="large" />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Investigation Quality Score (read-only summary)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <MuiRating {...roundedRatingIcons} value={4.5} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            4.5 / 5 (32 reviews)
          </Typography>
        </Stack>
      </Box>
    </Stack>
  ),
};

function renderStory(story: { render?: (...args: any[]) => any; args?: any }) {
  if (story.render) {
    return story.render({}, {});
  }
  if (story.args) {
    return <RavenRating {...story.args} />;
  }
  return null;
}

export const RatingPage: Story = {
  name: 'Rating',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <StorybookPage maxWidth={760}>
      <StorybookSection title="Basic">{renderStory(Basic)}</StorybookSection>
      <StorybookSection title="Half Precision">{renderStory(HalfPrecision)}</StorybookSection>
      <StorybookSection title="Sizes">{renderStory(Sizes)}</StorybookSection>
      <StorybookSection title="Hover Feedback">{renderStory(HoverFeedback)}</StorybookSection>
      <StorybookSection title="Custom Icons">{renderStory(CustomIcons)}</StorybookSection>
      <StorybookSection title="Max Stars">{renderStory(MaxStars)}</StorybookSection>
      <StorybookSection title="Raven Product Patterns">{renderStory(RavenProductPatterns)}</StorybookSection>
    </StorybookPage>
  ),
};

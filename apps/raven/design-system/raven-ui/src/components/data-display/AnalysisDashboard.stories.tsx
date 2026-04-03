import { useState } from 'react';

import AssignmentRounded from '@mui/icons-material/AssignmentRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import FilterListRounded from '@mui/icons-material/FilterListRounded';
import FileDownloadRounded from '@mui/icons-material/FileDownloadRounded';
import ManageSearchRounded from '@mui/icons-material/ManageSearchRounded';
import RecommendRounded from '@mui/icons-material/RecommendRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import type { Meta, StoryObj } from '@storybook/react';

import Chip from '@mui/material/Chip';
import EventRounded from '@mui/icons-material/EventRounded';

import { TabNavigation } from '../navigation/TabNavigation';
import { AnalyticsChartCard } from './AnalyticsChartCard';
import { CauseAnalysisChart } from './CauseAnalysisChart';
import { IncidentsSummary } from './IncidentsSummary';

export default {
  title: 'Pages/Analysis Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const OVERVIEW_STATS = [
  { value: 340, label: 'Total Incidents' },
  { value: 177, label: 'Total Investigation In-Progress' },
  { value: 22,  label: 'Total Investigation Released' },
  { value: 70,  label: 'Total Closed' },
];

const DETAIL_CARDS = [
  {
    icon: <AssignmentRounded sx={{ fontSize: 20, color: '#0277BD' }} />,
    iconBg: '#E1F5FE',
    title: 'Total Reports',
    count: 340,
    breakdown: [
      { label: 'Draft', value: 16 },
      { label: 'Reported', value: 324 },
      { label: 'Rejected', value: 24 },
      { label: 'Approved by Safety', value: 30 },
      { label: 'Approved by Department', value: 269 },
    ],
    rate: { label: '89% Closure Rate', value: '89%', positive: true },
  },
  {
    icon: <ManageSearchRounded sx={{ fontSize: 20, color: '#E65100' }} />,
    iconBg: '#FFF3E0',
    title: 'Total Investigations',
    count: 324,
    breakdown: [
      { label: 'In-Progress', value: 16 },
      { label: 'Released', value: 24 },
      { label: 'Closed', value: 324 },
    ],
    rate: { label: '73% Done Rate', value: '73%', positive: true },
    overdue: { count: 2, label: 'Overdue' },
  },
  {
    icon: <RecommendRounded sx={{ fontSize: 20, color: '#2E7D32' }} />,
    iconBg: '#E8F5E9',
    title: 'Total Recommendations',
    count: 59,
    breakdown: [
      { label: 'Pending', value: 14 },
      { label: 'In-Review', value: 2 },
      { label: 'Done', value: 43 },
    ],
    rate: { label: '73% Done Rate', value: '73%', positive: true },
    overdue: { count: 2, label: 'Overdue' },
  },
];

const DIRECT_CAUSE_DATA = [
  { category: 'Inadequate PPE', value: 22 },
  { category: 'Inadequate Guards', value: 20 },
  { category: 'Personal Protective Equipment Not Used', value: 17 },
  { category: 'Operation Of Equipment Without Authority', value: 14 },
  { category: 'Work Or Motion At Improper/Unsafe Speed', value: 10 },
  { category: 'Others', value: 15 },
];

const ROOT_CAUSE_DATA = [
  { category: 'Personnel Training', value: 8 },
  { category: 'Procedures & Practices', value: 18 },
  { category: 'Hazard Identification & Risk Assessment', value: 16 },
  { category: 'Poor Design Of Plant And Equipment', value: 20 },
  { category: 'Inadequate Supervision', value: 12 },
  { category: 'Others', value: 22 },
];

const TABS = [
  { label: 'All Incidents' },
  { label: 'Near Miss' },
  { label: 'Unsafe Conditions' },
  { label: 'Unsafe Acts' },
];

/* ─── Trend Line Mock ────────────────────────────────────────────────────── */

function TrendLineMock() {
  const points = [
    { x: 0, reported: 38, closed: 5 },
    { x: 1, reported: 35, closed: 8 },
    { x: 2, reported: 22, closed: 12 },
    { x: 3, reported: 18, closed: 18 },
    { x: 4, reported: 14, closed: 20 },
    { x: 5, reported: 8, closed: 15 },
    { x: 6, reported: 6, closed: 10 },
  ];
  const maxY = 40;
  const w = 480;
  const h = 180;

  const toPath = (key: 'reported' | 'closed') =>
    points
      .map((p, i) => {
        const px = (p.x / 6) * w;
        const py = h - (p[key] / maxY) * h;
        return `${i === 0 ? 'M' : 'L'}${px},${py}`;
      })
      .join(' ');

  return (
    <Box>
      <svg viewBox={`0 0 ${w} ${h + 30}`} width="100%" height={h + 30}>
        {[0, 10, 20, 30, 40].map((v) => {
          const y = h - (v / maxY) * h;
          return (
            <g key={v}>
              <line x1={0} y1={y} x2={w} y2={y} stroke="#e0e0e0" strokeDasharray="4 4" />
              <text x={-4} y={y + 4} fontSize="11" fill="#9e9e9e" textAnchor="end">{v}</text>
            </g>
          );
        })}
        <path d={toPath('reported')} fill="none" stroke="#4A148C" strokeWidth={2.5} />
        <path d={toPath('closed')} fill="none" stroke="#66BB6A" strokeWidth={2.5} />
        {['Jan 2026', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((label, i) => (
          <text key={label} x={(i / 6) * w} y={h + 20} fontSize="11" fill="#9e9e9e" textAnchor="middle">
            {label}
          </text>
        ))}
      </svg>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 1 }}>
        {[{ label: 'Reported', color: '#4A148C' }, { label: 'Closed', color: '#66BB6A' }].map((item) => (
          <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: item.color }} />
            <Typography variant="caption" color="text.secondary">{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* ─── Resolution Rate Mock ───────────────────────────────────────────────── */

function ResolutionRateMock() {
  const points = [10, 15, 22, 30, 40, 55, 65, 72, 77];
  const w = 480;
  const h = 180;
  const path = points
    .map((v, i) => {
      const px = (i / (points.length - 1)) * w;
      const py = h - (v / 100) * h;
      return `${i === 0 ? 'M' : 'L'}${px},${py}`;
    })
    .join(' ');

  return (
    <Box>
      <svg viewBox={`0 0 ${w} ${h + 30}`} width="100%" height={h + 30}>
        {[0, 20, 40, 60, 80, 100].map((v) => {
          const y = h - (v / 100) * h;
          return (
            <g key={v}>
              <line x1={0} y1={y} x2={w} y2={y} stroke="#e0e0e0" strokeDasharray="4 4" />
              <text x={-4} y={y + 4} fontSize="11" fill="#9e9e9e" textAnchor="end">{v}%</text>
            </g>
          );
        })}
        <path d={path} fill="none" stroke="#7B1FA2" strokeWidth={2.5} />
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((label, i) => (
          <text key={label} x={(i / 8) * w} y={h + 20} fontSize="11" fill="#9e9e9e" textAnchor="middle">
            {label}
          </text>
        ))}
      </svg>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#7B1FA2' }} />
          <Typography variant="caption" color="text.secondary">Resolution Rate (%)</Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* ─── Grouped Bar Mock ───────────────────────────────────────────────────── */

function GroupedBarMock() {
  const months = ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026'];
  const data = [
    { nearMiss: 35, unsafeCond: 28, unsafeActs: 8 },
    { nearMiss: 22, unsafeCond: 18, unsafeActs: 5 },
    { nearMiss: 15, unsafeCond: 12, unsafeActs: 3 },
    { nearMiss: 4, unsafeCond: 2, unsafeActs: 0 },
  ];
  const colors = { nearMiss: '#4A148C', unsafeCond: '#FF9800', unsafeActs: '#EF5350' };
  const maxVal = 40;
  const barW = 20;
  const groupGap = 80;

  return (
    <Box>
      <svg viewBox="0 0 480 200" width="100%" height={200}>
        {data.map((d, gi) => {
          const groupX = 40 + gi * (groupGap + 40);
          const bars = [
            { val: d.nearMiss, col: colors.nearMiss },
            { val: d.unsafeCond, col: colors.unsafeCond },
            { val: d.unsafeActs, col: colors.unsafeActs },
          ];
          return (
            <g key={gi}>
              {bars.map((b, bi) => {
                const bh = (b.val / maxVal) * 160;
                return (
                  <rect
                    key={bi}
                    x={groupX + bi * (barW + 4)}
                    y={170 - bh}
                    width={barW}
                    height={bh}
                    fill={b.col}
                    rx={3}
                  />
                );
              })}
              <text x={groupX + 32} y={190} fontSize="11" fill="#9e9e9e" textAnchor="middle">
                {months[gi]}
              </text>
            </g>
          );
        })}
      </svg>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 1 }}>
        {[
          { label: 'Near Miss', color: colors.nearMiss },
          { label: 'Unsafe Conditions', color: colors.unsafeCond },
          { label: 'Unsafe Acts', color: colors.unsafeActs },
        ].map((item) => (
          <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: item.color }} />
            <Typography variant="caption" color="text.secondary">{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* ─── Dashboard Story ────────────────────────────────────────────────────── */

function AnalysisDashboardPrototype() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ backgroundColor: '#fdfafe', minHeight: '100vh', display: 'flex' }}>
      {/* Main content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Page header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            py: 2,
            backgroundColor: '#fff',
            borderBottom: '1px solid #F3E5F5',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          }}
        >
          <Typography variant="h6" fontWeight={600}>Analysis</Typography>
          <Button
            variant="contained"
            startIcon={<AutoAwesomeRounded />}
            sx={{
              backgroundColor: '#4A148C',
              borderRadius: '50px',
              textTransform: 'uppercase',
              fontWeight: 500,
              '&:hover': { backgroundColor: '#38006b' },
            }}
          >
            AI Insights
          </Button>
        </Box>

        {/* Tabs + Filters */}
        <Box sx={{ px: 3, pt: 2, backgroundColor: '#fff', borderBottom: '1px solid #F3E5F5' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <TabNavigation
              tabs={TABS}
              activeIndex={activeTab}
              onChange={setActiveTab}
              ariaLabel="Incident type tabs"
              variant="standard"
            />
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button startIcon={<FilterListRounded />} sx={{ color: '#4A148C' }}>Filter</Button>
              <Button startIcon={<FileDownloadRounded />} sx={{ color: '#4A148C' }}>Export</Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1.5, pb: 2 }}>
            <Chip label="All Units" variant="outlined" sx={{ borderColor: '#E0E0E0' }} />
            <Chip label="All Departments" variant="outlined" sx={{ borderColor: '#E0E0E0' }} />
            <Chip icon={<EventRounded sx={{ fontSize: 16 }} />} label="Feb-Mar 2026" variant="outlined" sx={{ borderColor: '#E0E0E0' }} />
          </Box>
        </Box>

        {/* Dashboard content */}
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Incidents Summary */}
          <IncidentsSummary
            sectionTitle="INCIDENTS SUMMARY"
            approvalRate={{ label: '21% Approval Rate' }}
            overviewStats={OVERVIEW_STATS}
            detailCards={DETAIL_CARDS}
          />

          {/* Incident Analysis section */}
          <Card
            elevation={0}
            sx={{
              borderRadius: '32px',
              border: '1px solid #F3E5F5',
              boxShadow: '0px 2px 8px rgba(63,81,181,0.04)',
              p: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{ textTransform: 'uppercase', letterSpacing: '0.17px', px: 1, mb: 2 }}
            >
              Incident Analysis
            </Typography>

            <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <AnalyticsChartCard title="Incident Trend" subtitle="Reported vs. Closed" height={372}>
                  <TrendLineMock />
                </AnalyticsChartCard>
              </Box>
              <Box sx={{ flex: 1 }}>
                <AnalyticsChartCard title="Resolution Rate" subtitle="Monthly resolution rate (%)" height={372}>
                  <ResolutionRateMock />
                </AnalyticsChartCard>
              </Box>
            </Box>

            <AnalyticsChartCard title="Incident Type Comparison" subtitle="Monthly breakdown by incident type" height={372}>
              <GroupedBarMock />
            </AnalyticsChartCard>
          </Card>

          {/* Monthly Trends section */}
          <Card
            elevation={0}
            sx={{
              borderRadius: '32px',
              border: '1px solid #F3E5F5',
              boxShadow: '0px 2px 8px rgba(63,81,181,0.04)',
              p: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{ textTransform: 'uppercase', letterSpacing: '0.17px', px: 1, mb: 2 }}
            >
              Monthly Trends
            </Typography>

            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{ flex: 1 }}>
                <AnalyticsChartCard title="Direct Cause Analysis" subtitle="Frequency by Direct Cause category">
                  <CauseAnalysisChart data={DIRECT_CAUSE_DATA} barColor="#4A148C" />
                </AnalyticsChartCard>
              </Box>
              <Box sx={{ flex: 1 }}>
                <AnalyticsChartCard title="Root Cause Analysis" subtitle="Frequency by Root Cause category">
                  <CauseAnalysisChart data={ROOT_CAUSE_DATA} barColor="#7B1FA2" />
                </AnalyticsChartCard>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export const Dashboard: StoryObj = {
  name: 'Analysis Dashboard',
  parameters: { layout: 'fullscreen' },
  render: () => <AnalysisDashboardPrototype />,
};

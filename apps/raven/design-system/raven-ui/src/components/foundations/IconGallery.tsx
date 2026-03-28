import React, { useState, useMemo, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './IconGallery.css';

/* ====== Navigation ====== */
import HomeRounded from '@mui/icons-material/HomeRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import ArrowUpwardRounded from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded';
import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRounded from '@mui/icons-material/ArrowDropUpRounded';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRounded from '@mui/icons-material/ExpandLessRounded';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import FullscreenRounded from '@mui/icons-material/FullscreenRounded';
import FullscreenExitRounded from '@mui/icons-material/FullscreenExitRounded';
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded';
import ExitToAppRounded from '@mui/icons-material/ExitToAppRounded';
import LoginRounded from '@mui/icons-material/LoginRounded';
import FirstPageRounded from '@mui/icons-material/FirstPageRounded';
import LastPageRounded from '@mui/icons-material/LastPageRounded';
import UnfoldMoreRounded from '@mui/icons-material/UnfoldMoreRounded';
import UnfoldLessRounded from '@mui/icons-material/UnfoldLessRounded';
import SwapVertRounded from '@mui/icons-material/SwapVertRounded';
import SwapHorizRounded from '@mui/icons-material/SwapHorizRounded';
import DoubleArrowRounded from '@mui/icons-material/DoubleArrowRounded';
import SubdirectoryArrowLeftRounded from '@mui/icons-material/SubdirectoryArrowLeftRounded';
import SubdirectoryArrowRightRounded from '@mui/icons-material/SubdirectoryArrowRightRounded';
import NorthRounded from '@mui/icons-material/NorthRounded';
import SouthRounded from '@mui/icons-material/SouthRounded';
import EastRounded from '@mui/icons-material/EastRounded';
import WestRounded from '@mui/icons-material/WestRounded';
import NearMeRounded from '@mui/icons-material/NearMeRounded';
import ExploreRounded from '@mui/icons-material/ExploreRounded';
import MapRounded from '@mui/icons-material/MapRounded';

/* ====== Actions ====== */
import AddRounded from '@mui/icons-material/AddRounded';
import EditRounded from '@mui/icons-material/EditRounded';
import DeleteRounded from '@mui/icons-material/DeleteRounded';
import DeleteForeverRounded from '@mui/icons-material/DeleteForeverRounded';
import DeleteSweepRounded from '@mui/icons-material/DeleteSweepRounded';
import SaveRounded from '@mui/icons-material/SaveRounded';
import CheckRounded from '@mui/icons-material/CheckRounded';
import DoneRounded from '@mui/icons-material/DoneRounded';
import DoneAllRounded from '@mui/icons-material/DoneAllRounded';
import ClearRounded from '@mui/icons-material/ClearRounded';
import RefreshRounded from '@mui/icons-material/RefreshRounded';
import DownloadRounded from '@mui/icons-material/DownloadRounded';
import UploadRounded from '@mui/icons-material/UploadRounded';
import FileUploadRounded from '@mui/icons-material/FileUploadRounded';
import FileDownloadRounded from '@mui/icons-material/FileDownloadRounded';
import ContentCopyRounded from '@mui/icons-material/ContentCopyRounded';
import ContentCutRounded from '@mui/icons-material/ContentCutRounded';
import ContentPasteRounded from '@mui/icons-material/ContentPasteRounded';
import ShareRounded from '@mui/icons-material/ShareRounded';
import PrintRounded from '@mui/icons-material/PrintRounded';
import SendRounded from '@mui/icons-material/SendRounded';
import LinkRounded from '@mui/icons-material/LinkRounded';
import LinkOffRounded from '@mui/icons-material/LinkOffRounded';
import FilterListRounded from '@mui/icons-material/FilterListRounded';
import FilterAltRounded from '@mui/icons-material/FilterAltRounded';
import FilterAltOffRounded from '@mui/icons-material/FilterAltOffRounded';
import SortRounded from '@mui/icons-material/SortRounded';
import MoreVertRounded from '@mui/icons-material/MoreVertRounded';
import MoreHorizRounded from '@mui/icons-material/MoreHorizRounded';
import ReplayRounded from '@mui/icons-material/ReplayRounded';
import SyncRounded from '@mui/icons-material/SyncRounded';
import CachedRounded from '@mui/icons-material/CachedRounded';
import AutorenewRounded from '@mui/icons-material/AutorenewRounded';
import UndoRounded from '@mui/icons-material/UndoRounded';
import RedoRounded from '@mui/icons-material/RedoRounded';
import HistoryRounded from '@mui/icons-material/HistoryRounded';
import RestoreRounded from '@mui/icons-material/RestoreRounded';
import ArchiveRounded from '@mui/icons-material/ArchiveRounded';
import UnarchiveRounded from '@mui/icons-material/UnarchiveRounded';
import NoteAddRounded from '@mui/icons-material/NoteAddRounded';
import PostAddRounded from '@mui/icons-material/PostAddRounded';
import AddCircleOutlineRounded from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRounded from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddBoxRounded from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRounded from '@mui/icons-material/IndeterminateCheckBoxRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';
import StopRounded from '@mui/icons-material/StopRounded';
import SkipNextRounded from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRounded from '@mui/icons-material/SkipPreviousRounded';
import DragHandleRounded from '@mui/icons-material/DragHandleRounded';
import DragIndicatorRounded from '@mui/icons-material/DragIndicatorRounded';
import PublishRounded from '@mui/icons-material/PublishRounded';
import BackspaceRounded from '@mui/icons-material/BackspaceRounded';
import SelectAllRounded from '@mui/icons-material/SelectAllRounded';
import AddTaskRounded from '@mui/icons-material/AddTaskRounded';
import InputRounded from '@mui/icons-material/InputRounded';
import OutputRounded from '@mui/icons-material/OutputRounded';
import FindInPageRounded from '@mui/icons-material/FindInPageRounded';
import FindReplaceRounded from '@mui/icons-material/FindReplaceRounded';
import PowerSettingsNewRounded from '@mui/icons-material/PowerSettingsNewRounded';
import SettingsPowerRounded from '@mui/icons-material/SettingsPowerRounded';
import RestartAltRounded from '@mui/icons-material/RestartAltRounded';
import OpenWithRounded from '@mui/icons-material/OpenWithRounded';
import PanToolRounded from '@mui/icons-material/PanToolRounded';
import PanToolAltRounded from '@mui/icons-material/PanToolAltRounded';
import TouchAppRounded from '@mui/icons-material/TouchAppRounded';
import PinchRounded from '@mui/icons-material/PinchRounded';

/* ====== Status & Feedback ====== */
import InfoRounded from '@mui/icons-material/InfoRounded';
import WarningRounded from '@mui/icons-material/WarningRounded';
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded';
import ErrorRounded from '@mui/icons-material/ErrorRounded';
import ErrorOutlineRounded from '@mui/icons-material/ErrorOutlineRounded';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded';
import HelpRounded from '@mui/icons-material/HelpRounded';
import HelpOutlineRounded from '@mui/icons-material/HelpOutlineRounded';
import ReportProblemRounded from '@mui/icons-material/ReportProblemRounded';
import ReportRounded from '@mui/icons-material/ReportRounded';
import TaskAltRounded from '@mui/icons-material/TaskAltRounded';
import PendingRounded from '@mui/icons-material/PendingRounded';
import HourglassEmptyRounded from '@mui/icons-material/HourglassEmptyRounded';
import HourglassTopRounded from '@mui/icons-material/HourglassTopRounded';
import HourglassBottomRounded from '@mui/icons-material/HourglassBottomRounded';
import DoNotDisturbRounded from '@mui/icons-material/DoNotDisturbRounded';
import BlockRounded from '@mui/icons-material/BlockRounded';
import CancelRounded from '@mui/icons-material/CancelRounded';
import VerifiedRounded from '@mui/icons-material/VerifiedRounded';
import GppGoodRounded from '@mui/icons-material/GppGoodRounded';
import GppBadRounded from '@mui/icons-material/GppBadRounded';
import GppMaybeRounded from '@mui/icons-material/GppMaybeRounded';
import NewReleasesRounded from '@mui/icons-material/NewReleasesRounded';
import PriorityHighRounded from '@mui/icons-material/PriorityHighRounded';
import RunCircleRounded from '@mui/icons-material/RunCircleRounded';
import PrivacyTipRounded from '@mui/icons-material/PrivacyTipRounded';
import FeedbackRounded from '@mui/icons-material/FeedbackRounded';
import CrisisAlertRounded from '@mui/icons-material/CrisisAlertRounded';
import NotificationImportantRounded from '@mui/icons-material/NotificationImportantRounded';
import AnnouncementRounded from '@mui/icons-material/AnnouncementRounded';
import RuleRounded from '@mui/icons-material/RuleRounded';
import PublishedWithChangesRounded from '@mui/icons-material/PublishedWithChangesRounded';
import UnpublishedRounded from '@mui/icons-material/UnpublishedRounded';
import PendingActionsRounded from '@mui/icons-material/PendingActionsRounded';
import ScheduleRounded from '@mui/icons-material/ScheduleRounded';
import EventAvailableRounded from '@mui/icons-material/EventAvailableRounded';
import EventBusyRounded from '@mui/icons-material/EventBusyRounded';

/* ====== People & Accounts ====== */
import PersonRounded from '@mui/icons-material/PersonRounded';
import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import AccountCircleRounded from '@mui/icons-material/AccountCircleRounded';
import GroupRounded from '@mui/icons-material/GroupRounded';
import GroupAddRounded from '@mui/icons-material/GroupAddRounded';
import GroupRemoveRounded from '@mui/icons-material/GroupRemoveRounded';
import GroupsRounded from '@mui/icons-material/GroupsRounded';
import PersonAddRounded from '@mui/icons-material/PersonAddRounded';
import PersonRemoveRounded from '@mui/icons-material/PersonRemoveRounded';
import PersonOffRounded from '@mui/icons-material/PersonOffRounded';
import PersonSearchRounded from '@mui/icons-material/PersonSearchRounded';
import AdminPanelSettingsRounded from '@mui/icons-material/AdminPanelSettingsRounded';
import ManageAccountsRounded from '@mui/icons-material/ManageAccountsRounded';
import SupervisedUserCircleRounded from '@mui/icons-material/SupervisedUserCircleRounded';
import SupervisorAccountRounded from '@mui/icons-material/SupervisorAccountRounded';
import BadgeRounded from '@mui/icons-material/BadgeRounded';
import ContactPageRounded from '@mui/icons-material/ContactPageRounded';
import ContactMailRounded from '@mui/icons-material/ContactMailRounded';
import ContactPhoneRounded from '@mui/icons-material/ContactPhoneRounded';
import ContactsRounded from '@mui/icons-material/ContactsRounded';
import KeyRounded from '@mui/icons-material/KeyRounded';
import SecurityRounded from '@mui/icons-material/SecurityRounded';
import LockRounded from '@mui/icons-material/LockRounded';
import LockOpenRounded from '@mui/icons-material/LockOpenRounded';
import LockResetRounded from '@mui/icons-material/LockResetRounded';
import FingerprintRounded from '@mui/icons-material/FingerprintRounded';
import FaceRounded from '@mui/icons-material/FaceRounded';
import PermIdentityRounded from '@mui/icons-material/PermIdentityRounded';
import AccountBoxRounded from '@mui/icons-material/AccountBoxRounded';
import SwitchAccountRounded from '@mui/icons-material/SwitchAccountRounded';

/* ====== Communication ====== */
import NotificationsRounded from '@mui/icons-material/NotificationsRounded';
import NotificationsActiveRounded from '@mui/icons-material/NotificationsActiveRounded';
import NotificationsNoneRounded from '@mui/icons-material/NotificationsNoneRounded';
import NotificationsOffRounded from '@mui/icons-material/NotificationsOffRounded';
import EmailRounded from '@mui/icons-material/EmailRounded';
import MailRounded from '@mui/icons-material/MailRounded';
import MailOutlineRounded from '@mui/icons-material/MailOutlineRounded';
import InboxRounded from '@mui/icons-material/InboxRounded';
import DraftsRounded from '@mui/icons-material/DraftsRounded';
import MarkEmailReadRounded from '@mui/icons-material/MarkEmailReadRounded';
import MarkEmailUnreadRounded from '@mui/icons-material/MarkEmailUnreadRounded';
import ChatRounded from '@mui/icons-material/ChatRounded';
import ChatBubbleRounded from '@mui/icons-material/ChatBubbleRounded';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import CommentRounded from '@mui/icons-material/CommentRounded';
import ForumRounded from '@mui/icons-material/ForumRounded';
import MessageRounded from '@mui/icons-material/MessageRounded';
import SmsRounded from '@mui/icons-material/SmsRounded';
import QuestionAnswerRounded from '@mui/icons-material/QuestionAnswerRounded';
import ContactSupportRounded from '@mui/icons-material/ContactSupportRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import CallRounded from '@mui/icons-material/CallRounded';
import CallEndRounded from '@mui/icons-material/CallEndRounded';
import PhoneRounded from '@mui/icons-material/PhoneRounded';
import PhoneInTalkRounded from '@mui/icons-material/PhoneInTalkRounded';
import AlternateEmailRounded from '@mui/icons-material/AlternateEmailRounded';
import ThumbUpRounded from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRounded from '@mui/icons-material/ThumbDownRounded';
import ThumbUpOffAltRounded from '@mui/icons-material/ThumbUpOffAltRounded';
import ThumbDownOffAltRounded from '@mui/icons-material/ThumbDownOffAltRounded';
import FlagRounded from '@mui/icons-material/FlagRounded';
import OutlinedFlagRounded from '@mui/icons-material/OutlinedFlagRounded';
import RecordVoiceOverRounded from '@mui/icons-material/RecordVoiceOverRounded';
import CampaignRounded from '@mui/icons-material/CampaignRounded';
import RssFeedRounded from '@mui/icons-material/RssFeedRounded';

/* ====== Content & Files ====== */
import DescriptionRounded from '@mui/icons-material/DescriptionRounded';
import ArticleRounded from '@mui/icons-material/ArticleRounded';
import AssignmentRounded from '@mui/icons-material/AssignmentRounded';
import AssignmentIndRounded from '@mui/icons-material/AssignmentIndRounded';
import AssignmentTurnedInRounded from '@mui/icons-material/AssignmentTurnedInRounded';
import AssignmentLateRounded from '@mui/icons-material/AssignmentLateRounded';
import AssignmentReturnRounded from '@mui/icons-material/AssignmentReturnRounded';
import FolderRounded from '@mui/icons-material/FolderRounded';
import FolderOpenRounded from '@mui/icons-material/FolderOpenRounded';
import FolderSharedRounded from '@mui/icons-material/FolderSharedRounded';
import FolderSpecialRounded from '@mui/icons-material/FolderSpecialRounded';
import FolderDeleteRounded from '@mui/icons-material/FolderDeleteRounded';
import FolderCopyRounded from '@mui/icons-material/FolderCopyRounded';
import FolderZipRounded from '@mui/icons-material/FolderZipRounded';
import CreateNewFolderRounded from '@mui/icons-material/CreateNewFolderRounded';
import DriveFolderUploadRounded from '@mui/icons-material/DriveFolderUploadRounded';
import AttachFileRounded from '@mui/icons-material/AttachFileRounded';
import AttachmentRounded from '@mui/icons-material/AttachmentRounded';
import FileCopyRounded from '@mui/icons-material/FileCopyRounded';
import FileOpenRounded from '@mui/icons-material/FileOpenRounded';
import FilePresentRounded from '@mui/icons-material/FilePresentRounded';
import InsertDriveFileRounded from '@mui/icons-material/InsertDriveFileRounded';
import ImageRounded from '@mui/icons-material/ImageRounded';
import PhotoCameraRounded from '@mui/icons-material/PhotoCameraRounded';
import AddAPhotoRounded from '@mui/icons-material/AddAPhotoRounded';
import CollectionsRounded from '@mui/icons-material/CollectionsRounded';
import BookmarkRounded from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRounded from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkAddRounded from '@mui/icons-material/BookmarkAddRounded';
import BookmarkRemoveRounded from '@mui/icons-material/BookmarkRemoveRounded';
import BookmarksRounded from '@mui/icons-material/BookmarksRounded';
import LabelRounded from '@mui/icons-material/LabelRounded';
import LabelOffRounded from '@mui/icons-material/LabelOffRounded';
import CategoryRounded from '@mui/icons-material/CategoryRounded';
import TopicRounded from '@mui/icons-material/TopicRounded';
import SourceRounded from '@mui/icons-material/SourceRounded';
import SnippetFolderRounded from '@mui/icons-material/SnippetFolderRounded';
import DocumentScannerRounded from '@mui/icons-material/DocumentScannerRounded';
import SummarizeRounded from '@mui/icons-material/SummarizeRounded';
import FeedRounded from '@mui/icons-material/FeedRounded';
import TextSnippetRounded from '@mui/icons-material/TextSnippetRounded';

/* ====== Data & Charts ====== */
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import ShowChartRounded from '@mui/icons-material/ShowChartRounded';
import PieChartRounded from '@mui/icons-material/PieChartRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import DashboardCustomizeRounded from '@mui/icons-material/DashboardCustomizeRounded';
import AssessmentRounded from '@mui/icons-material/AssessmentRounded';
import AnalyticsRounded from '@mui/icons-material/AnalyticsRounded';
import InsightsRounded from '@mui/icons-material/InsightsRounded';
import TimelineRounded from '@mui/icons-material/TimelineRounded';
import TrendingUpRounded from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRounded from '@mui/icons-material/TrendingDownRounded';
import TrendingFlatRounded from '@mui/icons-material/TrendingFlatRounded';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import FactCheckRounded from '@mui/icons-material/FactCheckRounded';
import LeaderboardRounded from '@mui/icons-material/LeaderboardRounded';
import StackedLineChartRounded from '@mui/icons-material/StackedLineChartRounded';
import StackedBarChartRounded from '@mui/icons-material/StackedBarChartRounded';
import DonutLargeRounded from '@mui/icons-material/DonutLargeRounded';
import DonutSmallRounded from '@mui/icons-material/DonutSmallRounded';
import DataUsageRounded from '@mui/icons-material/DataUsageRounded';
import BubbleChartRounded from '@mui/icons-material/BubbleChartRounded';
import ScatterPlotRounded from '@mui/icons-material/ScatterPlotRounded';
import EqualizerRounded from '@mui/icons-material/EqualizerRounded';
import AutoGraphRounded from '@mui/icons-material/AutoGraphRounded';
import QueryStatsRounded from '@mui/icons-material/QueryStatsRounded';
import DataObjectRounded from '@mui/icons-material/DataObjectRounded';
import DataArrayRounded from '@mui/icons-material/DataArrayRounded';
import FunctionsRounded from '@mui/icons-material/FunctionsRounded';
import CalculateRounded from '@mui/icons-material/CalculateRounded';
import TagRounded from '@mui/icons-material/TagRounded';
import NumbersRounded from '@mui/icons-material/NumbersRounded';
import PercentRounded from '@mui/icons-material/PercentRounded';

/* ====== Ratings & Toggles ====== */
import StarRounded from '@mui/icons-material/StarRounded';
import StarBorderRounded from '@mui/icons-material/StarBorderRounded';
import StarHalfRounded from '@mui/icons-material/StarHalfRounded';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRounded from '@mui/icons-material/FavoriteBorderRounded';
import VisibilityRounded from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRounded from '@mui/icons-material/VisibilityOffRounded';
import ToggleOnRounded from '@mui/icons-material/ToggleOnRounded';
import ToggleOffRounded from '@mui/icons-material/ToggleOffRounded';
import RadioButtonCheckedRounded from '@mui/icons-material/RadioButtonCheckedRounded';
import RadioButtonUncheckedRounded from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxRounded from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRounded from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import GradeRounded from '@mui/icons-material/GradeRounded';

/* ====== Industry & Safety ====== */
import HealthAndSafetyRounded from '@mui/icons-material/HealthAndSafetyRounded';
import FactoryRounded from '@mui/icons-material/FactoryRounded';
import BusinessRounded from '@mui/icons-material/BusinessRounded';
import BusinessCenterRounded from '@mui/icons-material/BusinessCenterRounded';
import EngineeringRounded from '@mui/icons-material/EngineeringRounded';
import ConstructionRounded from '@mui/icons-material/ConstructionRounded';
import HandymanRounded from '@mui/icons-material/HandymanRounded';
import ScienceRounded from '@mui/icons-material/ScienceRounded';
import BiotechRounded from '@mui/icons-material/BiotechRounded';
import LocalShippingRounded from '@mui/icons-material/LocalShippingRounded';
import InventoryRounded from '@mui/icons-material/InventoryRounded';
import Inventory2Rounded from '@mui/icons-material/Inventory2Rounded';
import WarehouseRounded from '@mui/icons-material/WarehouseRounded';
import BuildRounded from '@mui/icons-material/BuildRounded';
import BuildCircleRounded from '@mui/icons-material/BuildCircleRounded';
import BugReportRounded from '@mui/icons-material/BugReportRounded';
import PrecisionManufacturingRounded from '@mui/icons-material/PrecisionManufacturingRounded';
import AgricultureRounded from '@mui/icons-material/AgricultureRounded';
import FireExtinguisherRounded from '@mui/icons-material/FireExtinguisherRounded';
import LocalFireDepartmentRounded from '@mui/icons-material/LocalFireDepartmentRounded';
import LocalHospitalRounded from '@mui/icons-material/LocalHospitalRounded';
import MedicalServicesRounded from '@mui/icons-material/MedicalServicesRounded';
import LocalPoliceRounded from '@mui/icons-material/LocalPoliceRounded';
import EmergencyShareRounded from '@mui/icons-material/EmergencyShareRounded';
import ElectricalServicesRounded from '@mui/icons-material/ElectricalServicesRounded';
import PlumbingRounded from '@mui/icons-material/PlumbingRounded';
import CleaningServicesRounded from '@mui/icons-material/CleaningServicesRounded';
import PestControlRounded from '@mui/icons-material/PestControlRounded';
import RecyclingRounded from '@mui/icons-material/RecyclingRounded';
import EnergySavingsLeafRounded from '@mui/icons-material/EnergySavingsLeafRounded';
import Co2Rounded from '@mui/icons-material/Co2Rounded';
import WaterDropRounded from '@mui/icons-material/WaterDropRounded';
import OilBarrelRounded from '@mui/icons-material/OilBarrelRounded';
import PropaneTankRounded from '@mui/icons-material/PropaneTankRounded';
import GasMeterRounded from '@mui/icons-material/GasMeterRounded';
import ElectricMeterRounded from '@mui/icons-material/ElectricMeterRounded';
import HardwareRounded from '@mui/icons-material/HardwareRounded';
import CarpenterRounded from '@mui/icons-material/CarpenterRounded';
import AssuredWorkloadRounded from '@mui/icons-material/AssuredWorkloadRounded';
import WorkspacePremiumRounded from '@mui/icons-material/WorkspacePremiumRounded';
import MilitaryTechRounded from '@mui/icons-material/MilitaryTechRounded';
import EmojiEventsRounded from '@mui/icons-material/EmojiEventsRounded';

/* ====== View & Layout ====== */
import ViewListRounded from '@mui/icons-material/ViewListRounded';
import ViewModuleRounded from '@mui/icons-material/ViewModuleRounded';
import GridViewRounded from '@mui/icons-material/GridViewRounded';
import AppsRounded from '@mui/icons-material/AppsRounded';
import ZoomInRounded from '@mui/icons-material/ZoomInRounded';
import ZoomOutRounded from '@mui/icons-material/ZoomOutRounded';
import CropFreeRounded from '@mui/icons-material/CropFreeRounded';
import AspectRatioRounded from '@mui/icons-material/AspectRatioRounded';
import FitScreenRounded from '@mui/icons-material/FitScreenRounded';
import ViewColumnRounded from '@mui/icons-material/ViewColumnRounded';
import ViewAgendaRounded from '@mui/icons-material/ViewAgendaRounded';
import ViewDayRounded from '@mui/icons-material/ViewDayRounded';
import ViewWeekRounded from '@mui/icons-material/ViewWeekRounded';
import ViewQuiltRounded from '@mui/icons-material/ViewQuiltRounded';
import ViewCompactRounded from '@mui/icons-material/ViewCompactRounded';
import ViewStreamRounded from '@mui/icons-material/ViewStreamRounded';
import ViewSidebarRounded from '@mui/icons-material/ViewSidebarRounded';
import TableRowsRounded from '@mui/icons-material/TableRowsRounded';
import ViewKanbanRounded from '@mui/icons-material/ViewKanbanRounded';
import ViewTimelineRounded from '@mui/icons-material/ViewTimelineRounded';
import SplitscreenRounded from '@mui/icons-material/SplitscreenRounded';
import SpaceDashboardRounded from '@mui/icons-material/SpaceDashboardRounded';
import WindowRounded from '@mui/icons-material/WindowRounded';
import WebRounded from '@mui/icons-material/WebRounded';
import WidgetsRounded from '@mui/icons-material/WidgetsRounded';
import LayersRounded from '@mui/icons-material/LayersRounded';
import LayersClearRounded from '@mui/icons-material/LayersClearRounded';

/* ====== Cloud & Devices ====== */
import CloudRounded from '@mui/icons-material/CloudRounded';
import CloudUploadRounded from '@mui/icons-material/CloudUploadRounded';
import CloudDownloadRounded from '@mui/icons-material/CloudDownloadRounded';
import CloudDoneRounded from '@mui/icons-material/CloudDoneRounded';
import CloudOffRounded from '@mui/icons-material/CloudOffRounded';
import CloudSyncRounded from '@mui/icons-material/CloudSyncRounded';
import StorageRounded from '@mui/icons-material/StorageRounded';
import DnsRounded from '@mui/icons-material/DnsRounded';
import ComputerRounded from '@mui/icons-material/ComputerRounded';
import LaptopRounded from '@mui/icons-material/LaptopRounded';
import TabletRounded from '@mui/icons-material/TabletRounded';
import PhoneAndroidRounded from '@mui/icons-material/PhoneAndroidRounded';
import PhoneIphoneRounded from '@mui/icons-material/PhoneIphoneRounded';
import DesktopWindowsRounded from '@mui/icons-material/DesktopWindowsRounded';
import DevicesRounded from '@mui/icons-material/DevicesRounded';
import WifiRounded from '@mui/icons-material/WifiRounded';
import WifiOffRounded from '@mui/icons-material/WifiOffRounded';
import BluetoothRounded from '@mui/icons-material/BluetoothRounded';
import BluetoothDisabledRounded from '@mui/icons-material/BluetoothDisabledRounded';
import CastRounded from '@mui/icons-material/CastRounded';
import RouterRounded from '@mui/icons-material/RouterRounded';
import MemoryRounded from '@mui/icons-material/MemoryRounded';
import SdCardRounded from '@mui/icons-material/SdCardRounded';
import UsbRounded from '@mui/icons-material/UsbRounded';
import KeyboardRounded from '@mui/icons-material/KeyboardRounded';
import MouseRounded from '@mui/icons-material/MouseRounded';
import HeadsetRounded from '@mui/icons-material/HeadsetRounded';
import WatchRounded from '@mui/icons-material/WatchRounded';
import QrCodeRounded from '@mui/icons-material/QrCodeRounded';
import QrCode2Rounded from '@mui/icons-material/QrCode2Rounded';
import QrCodeScannerRounded from '@mui/icons-material/QrCodeScannerRounded';

/* ====== Scheduling & Places ====== */
import CalendarTodayRounded from '@mui/icons-material/CalendarTodayRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import DateRangeRounded from '@mui/icons-material/DateRangeRounded';
import AccessTimeRounded from '@mui/icons-material/AccessTimeRounded';
import TimerRounded from '@mui/icons-material/TimerRounded';
import TimerOffRounded from '@mui/icons-material/TimerOffRounded';
import AlarmRounded from '@mui/icons-material/AlarmRounded';
import AlarmOnRounded from '@mui/icons-material/AlarmOnRounded';
import AlarmOffRounded from '@mui/icons-material/AlarmOffRounded';
import EventRounded from '@mui/icons-material/EventRounded';
import EventNoteRounded from '@mui/icons-material/EventNoteRounded';
import TodayRounded from '@mui/icons-material/TodayRounded';
import LocationOnRounded from '@mui/icons-material/LocationOnRounded';
import LocationOffRounded from '@mui/icons-material/LocationOffRounded';
import MyLocationRounded from '@mui/icons-material/MyLocationRounded';
import PlaceRounded from '@mui/icons-material/PlaceRounded';
import PinDropRounded from '@mui/icons-material/PinDropRounded';
import RoomRounded from '@mui/icons-material/RoomRounded';
import EditLocationRounded from '@mui/icons-material/EditLocationRounded';
import AddLocationRounded from '@mui/icons-material/AddLocationRounded';
import GpsFixedRounded from '@mui/icons-material/GpsFixedRounded';
import PublicRounded from '@mui/icons-material/PublicRounded';
import LanguageRounded from '@mui/icons-material/LanguageRounded';
import TravelExploreRounded from '@mui/icons-material/TravelExploreRounded';

/* ====== Text Formatting / Editor ====== */
import FormatBoldRounded from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRounded from '@mui/icons-material/FormatItalicRounded';
import FormatUnderlinedRounded from '@mui/icons-material/FormatUnderlinedRounded';
import FormatStrikethroughRounded from '@mui/icons-material/FormatStrikethroughRounded';
import FormatListBulletedRounded from '@mui/icons-material/FormatListBulletedRounded';
import FormatListNumberedRounded from '@mui/icons-material/FormatListNumberedRounded';
import FormatAlignLeftRounded from '@mui/icons-material/FormatAlignLeftRounded';
import FormatAlignCenterRounded from '@mui/icons-material/FormatAlignCenterRounded';
import FormatAlignRightRounded from '@mui/icons-material/FormatAlignRightRounded';
import FormatAlignJustifyRounded from '@mui/icons-material/FormatAlignJustifyRounded';
import FormatQuoteRounded from '@mui/icons-material/FormatQuoteRounded';
import FormatIndentIncreaseRounded from '@mui/icons-material/FormatIndentIncreaseRounded';
import FormatIndentDecreaseRounded from '@mui/icons-material/FormatIndentDecreaseRounded';
import FormatSizeRounded from '@mui/icons-material/FormatSizeRounded';
import FormatColorTextRounded from '@mui/icons-material/FormatColorTextRounded';
import FormatColorFillRounded from '@mui/icons-material/FormatColorFillRounded';
import FormatClearRounded from '@mui/icons-material/FormatClearRounded';
import FormatPaintRounded from '@mui/icons-material/FormatPaintRounded';
import TitleRounded from '@mui/icons-material/TitleRounded';
import TextFieldsRounded from '@mui/icons-material/TextFieldsRounded';
import ShortTextRounded from '@mui/icons-material/ShortTextRounded';
import NotesRounded from '@mui/icons-material/NotesRounded';
import WrapTextRounded from '@mui/icons-material/WrapTextRounded';
import SpellcheckRounded from '@mui/icons-material/SpellcheckRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';
import CodeOffRounded from '@mui/icons-material/CodeOffRounded';
import InsertLinkRounded from '@mui/icons-material/InsertLinkRounded';
import InsertPhotoRounded from '@mui/icons-material/InsertPhotoRounded';
import InsertChartRounded from '@mui/icons-material/InsertChartRounded';
import InsertCommentRounded from '@mui/icons-material/InsertCommentRounded';
import InsertEmoticonRounded from '@mui/icons-material/InsertEmoticonRounded';
import AbcRounded from '@mui/icons-material/AbcRounded';

/* ====== Settings & Tools ====== */
import SettingsRounded from '@mui/icons-material/SettingsRounded';
import SettingsApplicationsRounded from '@mui/icons-material/SettingsApplicationsRounded';
import TuneRounded from '@mui/icons-material/TuneRounded';
import DisplaySettingsRounded from '@mui/icons-material/DisplaySettingsRounded';
import SettingsBrightnessRounded from '@mui/icons-material/SettingsBrightnessRounded';
import LightModeRounded from '@mui/icons-material/LightModeRounded';
import DarkModeRounded from '@mui/icons-material/DarkModeRounded';
import TranslateRounded from '@mui/icons-material/TranslateRounded';
import PaletteRounded from '@mui/icons-material/PaletteRounded';
import ColorLensRounded from '@mui/icons-material/ColorLensRounded';
import BrushRounded from '@mui/icons-material/BrushRounded';
import DesignServicesRounded from '@mui/icons-material/DesignServicesRounded';
import ExtensionRounded from '@mui/icons-material/ExtensionRounded';
import IntegrationInstructionsRounded from '@mui/icons-material/IntegrationInstructionsRounded';
import ApiRounded from '@mui/icons-material/ApiRounded';
import TerminalRounded from '@mui/icons-material/TerminalRounded';
import DatasetRounded from '@mui/icons-material/DatasetRounded';
import TokenRounded from '@mui/icons-material/TokenRounded';
import HubRounded from '@mui/icons-material/HubRounded';
import AccountTreeRounded from '@mui/icons-material/AccountTreeRounded';
import SchemaRounded from '@mui/icons-material/SchemaRounded';
import LightbulbRounded from '@mui/icons-material/LightbulbRounded';
import TipsAndUpdatesRounded from '@mui/icons-material/TipsAndUpdatesRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import AutoFixHighRounded from '@mui/icons-material/AutoFixHighRounded';
import PsychologyRounded from '@mui/icons-material/PsychologyRounded';
import SmartToyRounded from '@mui/icons-material/SmartToyRounded';
import SpeedRounded from '@mui/icons-material/SpeedRounded';
import AdjustRounded from '@mui/icons-material/AdjustRounded';

/* ====== Maps & Transport ====== */
import DirectionsCarRounded from '@mui/icons-material/DirectionsCarRounded';
import DirectionsBusRounded from '@mui/icons-material/DirectionsBusRounded';
import DirectionsWalkRounded from '@mui/icons-material/DirectionsWalkRounded';
import DirectionsBikeRounded from '@mui/icons-material/DirectionsBikeRounded';
import DirectionsBoatRounded from '@mui/icons-material/DirectionsBoatRounded';
import DirectionsRailwayRounded from '@mui/icons-material/DirectionsRailwayRounded';
import FlightRounded from '@mui/icons-material/FlightRounded';
import TrainRounded from '@mui/icons-material/TrainRounded';
import LocalParkingRounded from '@mui/icons-material/LocalParkingRounded';
import LocalGasStationRounded from '@mui/icons-material/LocalGasStationRounded';
import LocalAtmRounded from '@mui/icons-material/LocalAtmRounded';
import StoreRounded from '@mui/icons-material/StoreRounded';
import StorefrontRounded from '@mui/icons-material/StorefrontRounded';
import RestaurantRounded from '@mui/icons-material/RestaurantRounded';
import HotelRounded from '@mui/icons-material/HotelRounded';
import ApartmentRounded from '@mui/icons-material/ApartmentRounded';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import AccountBalanceRounded from '@mui/icons-material/AccountBalanceRounded';
import MuseumRounded from '@mui/icons-material/MuseumRounded';

/* ====== Misc / Social ====== */
import CelebrationRounded from '@mui/icons-material/CelebrationRounded';
import CakeRounded from '@mui/icons-material/CakeRounded';
import SentimentSatisfiedRounded from '@mui/icons-material/SentimentSatisfiedRounded';
import SentimentDissatisfiedRounded from '@mui/icons-material/SentimentDissatisfiedRounded';
import SentimentNeutralRounded from '@mui/icons-material/SentimentNeutralRounded';
import SentimentVeryDissatisfiedRounded from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import SentimentVerySatisfiedRounded from '@mui/icons-material/SentimentVerySatisfiedRounded';
import MoodRounded from '@mui/icons-material/MoodRounded';
import EmojiEmotionsRounded from '@mui/icons-material/EmojiEmotionsRounded';
import PetsRounded from '@mui/icons-material/PetsRounded';
import NatureRounded from '@mui/icons-material/NatureRounded';
import ParkRounded from '@mui/icons-material/ParkRounded';
import ForestRounded from '@mui/icons-material/ForestRounded';
import SpaRounded from '@mui/icons-material/SpaRounded';
import FitnessCenterRounded from '@mui/icons-material/FitnessCenterRounded';
import SportsRounded from '@mui/icons-material/SportsRounded';
import AnchorRounded from '@mui/icons-material/AnchorRounded';
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import SatelliteAltRounded from '@mui/icons-material/SatelliteAltRounded';
import BoltRounded from '@mui/icons-material/BoltRounded';
import WhatshotRounded from '@mui/icons-material/WhatshotRounded';
import AcUnitRounded from '@mui/icons-material/AcUnitRounded';
import WavesRounded from '@mui/icons-material/WavesRounded';
import AirRounded from '@mui/icons-material/AirRounded';
import FilterDramaRounded from '@mui/icons-material/FilterDramaRounded';
import WbSunnyRounded from '@mui/icons-material/WbSunnyRounded';
import NightsStayRounded from '@mui/icons-material/NightsStayRounded';
import ThunderstormRounded from '@mui/icons-material/ThunderstormRounded';
import UmbrellaRounded from '@mui/icons-material/UmbrellaRounded';

/* ====== Money & Shopping ====== */
import AttachMoneyRounded from '@mui/icons-material/AttachMoneyRounded';
import MonetizationOnRounded from '@mui/icons-material/MonetizationOnRounded';
import PaidRounded from '@mui/icons-material/PaidRounded';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import ShoppingBagRounded from '@mui/icons-material/ShoppingBagRounded';
import AddShoppingCartRounded from '@mui/icons-material/AddShoppingCartRounded';
import ReceiptRounded from '@mui/icons-material/ReceiptRounded';
import ReceiptLongRounded from '@mui/icons-material/ReceiptLongRounded';
import CreditCardRounded from '@mui/icons-material/CreditCardRounded';
import PaymentRounded from '@mui/icons-material/PaymentRounded';
import AccountBalanceWalletRounded from '@mui/icons-material/AccountBalanceWalletRounded';
import SavingsRounded from '@mui/icons-material/SavingsRounded';
import CurrencyExchangeRounded from '@mui/icons-material/CurrencyExchangeRounded';
import RequestQuoteRounded from '@mui/icons-material/RequestQuoteRounded';
import PointOfSaleRounded from '@mui/icons-material/PointOfSaleRounded';
import LocalOfferRounded from '@mui/icons-material/LocalOfferRounded';
import DiscountRounded from '@mui/icons-material/DiscountRounded';
import SellRounded from '@mui/icons-material/SellRounded';
import CardGiftcardRounded from '@mui/icons-material/CardGiftcardRounded';
import RedeemRounded from '@mui/icons-material/RedeemRounded';

type IconMap = Record<string, React.ComponentType<{ className?: string }>>;

const ICON_CATEGORIES: Record<string, IconMap> = {
  'Navigation': {
    HomeRounded, SearchRounded, MenuRounded, ArrowBackRounded, ArrowForwardRounded,
    ArrowUpwardRounded, ArrowDownwardRounded, ArrowBackIosNewRounded, ArrowForwardIosRounded,
    ArrowDropDownRounded, ArrowDropUpRounded, ExpandMoreRounded, ExpandLessRounded,
    ChevronLeftRounded, ChevronRightRounded, CloseRounded, FullscreenRounded,
    FullscreenExitRounded, OpenInNewRounded, ExitToAppRounded, LoginRounded,
    FirstPageRounded, LastPageRounded, UnfoldMoreRounded, UnfoldLessRounded,
    SwapVertRounded, SwapHorizRounded, DoubleArrowRounded,
    SubdirectoryArrowLeftRounded, SubdirectoryArrowRightRounded,
    NorthRounded, SouthRounded, EastRounded, WestRounded,
    NearMeRounded, ExploreRounded, MapRounded,
  },
  'Actions': {
    AddRounded, EditRounded, DeleteRounded, DeleteForeverRounded, DeleteSweepRounded,
    SaveRounded, CheckRounded, DoneRounded, DoneAllRounded, ClearRounded,
    RefreshRounded, DownloadRounded, UploadRounded, FileUploadRounded, FileDownloadRounded,
    ContentCopyRounded, ContentCutRounded, ContentPasteRounded,
    ShareRounded, PrintRounded, SendRounded, LinkRounded, LinkOffRounded,
    FilterListRounded, FilterAltRounded, FilterAltOffRounded, SortRounded,
    MoreVertRounded, MoreHorizRounded, ReplayRounded, SyncRounded, CachedRounded,
    AutorenewRounded, UndoRounded, RedoRounded, HistoryRounded, RestoreRounded,
    ArchiveRounded, UnarchiveRounded, NoteAddRounded, PostAddRounded,
    AddCircleOutlineRounded, RemoveCircleOutlineRounded, AddBoxRounded,
    PlayArrowRounded, PauseRounded, StopRounded, SkipNextRounded, SkipPreviousRounded,
    DragHandleRounded, DragIndicatorRounded, PublishRounded, BackspaceRounded,
    SelectAllRounded, AddTaskRounded, InputRounded, OutputRounded,
    FindInPageRounded, FindReplaceRounded, PowerSettingsNewRounded,
    RestartAltRounded, OpenWithRounded,
    PanToolRounded, PanToolAltRounded, TouchAppRounded, PinchRounded,
  },
  'Status & Feedback': {
    InfoRounded, WarningRounded, WarningAmberRounded, ErrorRounded, ErrorOutlineRounded,
    CheckCircleRounded, CheckCircleOutlineRounded, HelpRounded, HelpOutlineRounded,
    ReportProblemRounded, ReportRounded, TaskAltRounded, PendingRounded,
    HourglassEmptyRounded, HourglassTopRounded, HourglassBottomRounded,
    DoNotDisturbRounded, BlockRounded, CancelRounded, VerifiedRounded,
    GppGoodRounded, GppBadRounded, GppMaybeRounded, NewReleasesRounded,
    PriorityHighRounded, RunCircleRounded, PrivacyTipRounded, FeedbackRounded,
    CrisisAlertRounded, NotificationImportantRounded, AnnouncementRounded,
    RuleRounded, PublishedWithChangesRounded, UnpublishedRounded,
    PendingActionsRounded, ScheduleRounded, EventAvailableRounded, EventBusyRounded,
  },
  'People & Accounts': {
    PersonRounded, PersonOutlineRounded, AccountCircleRounded, GroupRounded,
    GroupAddRounded, GroupRemoveRounded, GroupsRounded, PersonAddRounded,
    PersonRemoveRounded, PersonOffRounded, PersonSearchRounded,
    AdminPanelSettingsRounded, ManageAccountsRounded,
    SupervisedUserCircleRounded, SupervisorAccountRounded, BadgeRounded,
    ContactPageRounded, ContactMailRounded, ContactPhoneRounded, ContactsRounded,
    KeyRounded, SecurityRounded, LockRounded, LockOpenRounded, LockResetRounded,
    FingerprintRounded, FaceRounded, PermIdentityRounded, AccountBoxRounded,
    SwitchAccountRounded,
  },
  'Communication': {
    NotificationsRounded, NotificationsActiveRounded, NotificationsNoneRounded,
    NotificationsOffRounded, EmailRounded, MailRounded, MailOutlineRounded,
    InboxRounded, DraftsRounded, MarkEmailReadRounded, MarkEmailUnreadRounded,
    ChatRounded, ChatBubbleRounded, ChatBubbleOutlineRounded, CommentRounded,
    ForumRounded, MessageRounded, SmsRounded, QuestionAnswerRounded,
    ContactSupportRounded, SupportAgentRounded, CallRounded, CallEndRounded,
    PhoneRounded, PhoneInTalkRounded, AlternateEmailRounded,
    ThumbUpRounded, ThumbDownRounded, ThumbUpOffAltRounded, ThumbDownOffAltRounded,
    FlagRounded, OutlinedFlagRounded, RecordVoiceOverRounded, CampaignRounded,
    RssFeedRounded,
  },
  'Content & Files': {
    DescriptionRounded, ArticleRounded, AssignmentRounded, AssignmentIndRounded,
    AssignmentTurnedInRounded, AssignmentLateRounded, AssignmentReturnRounded,
    FolderRounded, FolderOpenRounded, FolderSharedRounded, FolderSpecialRounded,
    FolderDeleteRounded, FolderCopyRounded, FolderZipRounded,
    CreateNewFolderRounded, DriveFolderUploadRounded,
    AttachFileRounded, AttachmentRounded, FileCopyRounded, FileOpenRounded,
    FilePresentRounded, InsertDriveFileRounded, ImageRounded, PhotoCameraRounded,
    AddAPhotoRounded, CollectionsRounded, BookmarkRounded, BookmarkBorderRounded,
    BookmarkAddRounded, BookmarkRemoveRounded, BookmarksRounded,
    LabelRounded, LabelOffRounded, CategoryRounded, TopicRounded, SourceRounded,
    SnippetFolderRounded, DocumentScannerRounded, SummarizeRounded, FeedRounded,
    TextSnippetRounded,
  },
  'Data & Charts': {
    BarChartRounded, ShowChartRounded, PieChartRounded, DashboardRounded,
    DashboardCustomizeRounded, AssessmentRounded, AnalyticsRounded, InsightsRounded,
    TimelineRounded, TrendingUpRounded, TrendingDownRounded, TrendingFlatRounded,
    TableChartRounded, FactCheckRounded, LeaderboardRounded,
    StackedLineChartRounded, StackedBarChartRounded,
    DonutLargeRounded, DonutSmallRounded, DataUsageRounded,
    BubbleChartRounded, ScatterPlotRounded, EqualizerRounded,
    AutoGraphRounded, QueryStatsRounded,
    DataObjectRounded, DataArrayRounded, FunctionsRounded, CalculateRounded,
    TagRounded, NumbersRounded, PercentRounded,
  },
  'Ratings & Toggles': {
    StarRounded, StarBorderRounded, StarHalfRounded,
    FavoriteRounded, FavoriteBorderRounded, GradeRounded,
    VisibilityRounded, VisibilityOffRounded,
    ToggleOnRounded, ToggleOffRounded,
    RadioButtonCheckedRounded, RadioButtonUncheckedRounded,
    CheckBoxRounded, CheckBoxOutlineBlankRounded, IndeterminateCheckBoxRounded,
  },
  'Industry & Safety': {
    HealthAndSafetyRounded, FactoryRounded, BusinessRounded, BusinessCenterRounded,
    EngineeringRounded, ConstructionRounded, HandymanRounded, ScienceRounded,
    BiotechRounded, LocalShippingRounded, InventoryRounded, Inventory2Rounded,
    WarehouseRounded, BuildRounded, BuildCircleRounded, BugReportRounded,
    PrecisionManufacturingRounded, AgricultureRounded,
    FireExtinguisherRounded, LocalFireDepartmentRounded,
    LocalHospitalRounded, MedicalServicesRounded, LocalPoliceRounded,
    EmergencyShareRounded, ElectricalServicesRounded, PlumbingRounded,
    CleaningServicesRounded, PestControlRounded, RecyclingRounded,
    EnergySavingsLeafRounded, Co2Rounded, WaterDropRounded, OilBarrelRounded,
    PropaneTankRounded, GasMeterRounded, ElectricMeterRounded,
    HardwareRounded, CarpenterRounded, AssuredWorkloadRounded,
    WorkspacePremiumRounded, MilitaryTechRounded, EmojiEventsRounded,
  },
  'Cloud & Devices': {
    CloudRounded, CloudUploadRounded, CloudDownloadRounded, CloudDoneRounded,
    CloudOffRounded, CloudSyncRounded, StorageRounded, DnsRounded,
    ComputerRounded, LaptopRounded, TabletRounded, PhoneAndroidRounded,
    PhoneIphoneRounded, DesktopWindowsRounded, DevicesRounded,
    WifiRounded, WifiOffRounded, BluetoothRounded, BluetoothDisabledRounded,
    CastRounded, RouterRounded, MemoryRounded, SdCardRounded, UsbRounded,
    KeyboardRounded, MouseRounded, HeadsetRounded, WatchRounded,
    QrCodeRounded, QrCode2Rounded, QrCodeScannerRounded,
  },
  'View & Layout': {
    ViewListRounded, ViewModuleRounded, GridViewRounded, AppsRounded,
    ZoomInRounded, ZoomOutRounded, CropFreeRounded, AspectRatioRounded,
    FitScreenRounded, ViewColumnRounded, ViewAgendaRounded, ViewDayRounded,
    ViewWeekRounded, ViewQuiltRounded, ViewCompactRounded, ViewStreamRounded,
    ViewSidebarRounded, TableRowsRounded, ViewKanbanRounded, ViewTimelineRounded,
    SplitscreenRounded, SpaceDashboardRounded, WindowRounded, WebRounded,
    WidgetsRounded, LayersRounded, LayersClearRounded,
  },
  'Scheduling & Places': {
    CalendarTodayRounded, CalendarMonthRounded, DateRangeRounded,
    AccessTimeRounded, TimerRounded, TimerOffRounded,
    AlarmRounded, AlarmOnRounded, AlarmOffRounded,
    EventRounded, EventNoteRounded, TodayRounded,
    LocationOnRounded, LocationOffRounded, MyLocationRounded,
    PlaceRounded, PinDropRounded, RoomRounded,
    EditLocationRounded, AddLocationRounded, GpsFixedRounded,
    PublicRounded, LanguageRounded, TravelExploreRounded,
  },
  'Text Formatting': {
    FormatBoldRounded, FormatItalicRounded, FormatUnderlinedRounded,
    FormatStrikethroughRounded, FormatListBulletedRounded, FormatListNumberedRounded,
    FormatAlignLeftRounded, FormatAlignCenterRounded, FormatAlignRightRounded,
    FormatAlignJustifyRounded, FormatQuoteRounded,
    FormatIndentIncreaseRounded, FormatIndentDecreaseRounded,
    FormatSizeRounded, FormatColorTextRounded, FormatColorFillRounded,
    FormatClearRounded, FormatPaintRounded, TitleRounded, TextFieldsRounded,
    ShortTextRounded, NotesRounded, WrapTextRounded, SpellcheckRounded,
    CodeRounded, CodeOffRounded, InsertLinkRounded, InsertPhotoRounded,
    InsertChartRounded, InsertCommentRounded, InsertEmoticonRounded, AbcRounded,
  },
  'Settings & Tools': {
    SettingsRounded, SettingsApplicationsRounded, TuneRounded, DisplaySettingsRounded,
    SettingsBrightnessRounded, LightModeRounded, DarkModeRounded,
    TranslateRounded, PaletteRounded, ColorLensRounded, BrushRounded,
    DesignServicesRounded, ExtensionRounded, IntegrationInstructionsRounded,
    ApiRounded, TerminalRounded, DatasetRounded, TokenRounded, HubRounded,
    AccountTreeRounded, SchemaRounded, LightbulbRounded, TipsAndUpdatesRounded,
    AutoAwesomeRounded, AutoFixHighRounded, PsychologyRounded, SmartToyRounded,
    SpeedRounded, AdjustRounded,
  },
  'Maps & Transport': {
    DirectionsCarRounded, DirectionsBusRounded, DirectionsWalkRounded,
    DirectionsBikeRounded, DirectionsBoatRounded, DirectionsRailwayRounded,
    FlightRounded, TrainRounded, LocalParkingRounded, LocalGasStationRounded,
    LocalAtmRounded, StoreRounded, StorefrontRounded, RestaurantRounded,
    HotelRounded, ApartmentRounded, SchoolRounded, AccountBalanceRounded,
    MuseumRounded,
  },
  'Money & Shopping': {
    AttachMoneyRounded, MonetizationOnRounded, PaidRounded,
    ShoppingCartRounded, ShoppingBagRounded, AddShoppingCartRounded,
    ReceiptRounded, ReceiptLongRounded, CreditCardRounded, PaymentRounded,
    AccountBalanceWalletRounded, SavingsRounded, CurrencyExchangeRounded,
    RequestQuoteRounded, PointOfSaleRounded, LocalOfferRounded, DiscountRounded,
    SellRounded, CardGiftcardRounded, RedeemRounded,
  },
  'Social & Mood': {
    CelebrationRounded, CakeRounded,
    SentimentSatisfiedRounded, SentimentDissatisfiedRounded, SentimentNeutralRounded,
    SentimentVeryDissatisfiedRounded, SentimentVerySatisfiedRounded,
    MoodRounded, EmojiEmotionsRounded, PetsRounded,
    NatureRounded, ParkRounded, ForestRounded, SpaRounded,
    FitnessCenterRounded, SportsRounded, AnchorRounded,
    RocketLaunchRounded, SatelliteAltRounded,
    BoltRounded, WhatshotRounded, AcUnitRounded, WavesRounded, AirRounded,
    FilterDramaRounded, WbSunnyRounded, NightsStayRounded,
    ThunderstormRounded, UmbrellaRounded,
  },
};

export function IconGallery() {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState('');

  const handleCopy = useCallback((name: string) => {
    navigator.clipboard.writeText(`import ${name} from '@mui/icons-material/${name}';`);
    setCopied(name);
    setTimeout(() => setCopied(''), 1500);
  }, []);

  const filteredCategories = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return ICON_CATEGORIES;
    const result: Record<string, IconMap> = {};
    Object.entries(ICON_CATEGORIES).forEach(([cat, icons]) => {
      const filtered: IconMap = {};
      Object.entries(icons).forEach(([name, Icon]) => {
        if (name.toLowerCase().includes(q) || cat.toLowerCase().includes(q)) {
          filtered[name] = Icon;
        }
      });
      if (Object.keys(filtered).length > 0) result[cat] = filtered;
    });
    return result;
  }, [search]);

  const totalIcons = useMemo(() => {
    const seen = new Set<string>();
    Object.values(ICON_CATEGORIES).forEach((icons) => Object.keys(icons).forEach((n) => seen.add(n)));
    return seen.size;
  }, []);

  const filteredCount = useMemo(() => {
    const seen = new Set<string>();
    Object.values(filteredCategories).forEach((icons) => Object.keys(icons).forEach((n) => seen.add(n)));
    return seen.size;
  }, [filteredCategories]);

  return (
    <div className="raven-icon-gallery">
      <h1 className="raven-icon-gallery__title">Icons</h1>
      <p className="raven-icon-gallery__subtitle">
        Raven uses <strong>Material Icons — Rounded</strong> theme as the standard icon set.
        All {totalIcons} icons below are from <code>@mui/icons-material</code> and can be
        imported directly. Click any icon to copy its import statement.
      </p>

      <div className="raven-icon-gallery__section">
        <h3 className="raven-icon-gallery__section-title">
          Icon Theme
          <span className="raven-icon-gallery__badge--standard">Rounded = Standard</span>
        </h3>
        <p className="raven-icon-gallery__section-desc">
          MUI provides five icon themes: Filled, Outlined, Rounded, Two-Tone, and Sharp.
          Raven uses <strong>Rounded</strong> for softer, friendlier visuals. All component names
          end with <code>Rounded</code> (e.g., <code>DeleteRounded</code>, <code>HomeRounded</code>).
        </p>
      </div>

      <div className="raven-icon-gallery__section">
        <h3 className="raven-icon-gallery__section-title">Usage</h3>
        <div className="raven-icon-gallery__code">{`// Recommended: named import (best for tree-shaking)
import HomeRounded from '@mui/icons-material/HomeRounded';

// With IconButton
import IconButton from '@mui/material/IconButton';
<IconButton aria-label="home"><HomeRounded /></IconButton>

// With Button
import Button from '@mui/material/Button';
<Button startIcon={<HomeRounded />}>Home</Button>

// Sizes: "small" (20px) | "medium" (24px, default) | "large" (35px) | "inherit"
<HomeRounded fontSize="small" />
<HomeRounded fontSize="large" />

// Colors: "inherit" | "primary" | "secondary" | "action" | "error" | "disabled"
<HomeRounded color="primary" />
<HomeRounded color="error" />

// Custom SVG icons (for icons not in Material Design)
import SvgIcon from '@mui/material/SvgIcon';
<SvgIcon viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>`}</div>
      </div>

      <div className="raven-icon-gallery__section">
        <h3 className="raven-icon-gallery__section-title">Guidelines</h3>
        <div className="raven-icon-gallery__guidelines">
          <div className="raven-icon-gallery__guideline-card">
            <h4>SVG over Font</h4>
            <p>Always use SVG icons from <code>@mui/icons-material</code>. They support code splitting, render crisply at any size, and are accessible by default.</p>
          </div>
          <div className="raven-icon-gallery__guideline-card">
            <h4>Rounded Theme Only</h4>
            <p>Use only Rounded variants for consistency. Import names always end with <code>Rounded</code>. Append <code>Rounded</code> to any Material icon name.</p>
          </div>
          <div className="raven-icon-gallery__guideline-card">
            <h4>Accessibility</h4>
            <p>Decorative icons get <code>aria-hidden="true"</code> automatically. For semantic icons (buttons without text), add <code>aria-label</code> to the parent.</p>
          </div>
          <div className="raven-icon-gallery__guideline-card">
            <h4>Sizing</h4>
            <p>Use MUI's <code>fontSize</code> prop: <code>small</code> (20px), default (24px), <code>large</code> (35px). Avoid arbitrary pixel values.</p>
          </div>
          <div className="raven-icon-gallery__guideline-card">
            <h4>Color</h4>
            <p>Icons inherit text color by default. Use MUI's <code>color</code> prop for theme colors. Avoid hardcoded hex values.</p>
          </div>
          <div className="raven-icon-gallery__guideline-card">
            <h4>Custom SVG Icons</h4>
            <p>For icons not in Material Design, use <code>SvgIcon</code> wrapper with a 24x24 viewBox. Or use <code>createSvgIcon()</code> utility for reusable custom icons.</p>
          </div>
        </div>
      </div>

      <hr className="raven-icon-gallery__divider" />

      <div className="raven-icon-gallery__search">
        <TextField
          className="raven-text-field"
          placeholder="Search icons…"
          size="small"
          fullWidth
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />
      </div>

      <p className="raven-icon-gallery__count">
        {search ? `${filteredCount} icon${filteredCount !== 1 ? 's' : ''} found` : `${totalIcons} icons in ${Object.keys(ICON_CATEGORIES).length} categories`}
      </p>

      {Object.entries(filteredCategories).map(([category, icons]) => (
        <div key={category} className="raven-icon-gallery__section">
          <h3 className="raven-icon-gallery__section-title">
            {category}
            <span className="raven-icon-gallery__badge">{Object.keys(icons).length}</span>
          </h3>
          <div className="raven-icon-gallery__grid">
            {Object.entries(icons).map(([name, Icon]) => (
              <div
                key={name}
                className={`raven-icon-gallery__cell${copied === name ? ' raven-icon-gallery__cell--copied' : ''}`}
                onClick={() => handleCopy(name)}
                title={`import ${name} from '@mui/icons-material/${name}'`}
              >
                <Icon className="raven-icon-gallery__cell-icon" />
                <span className="raven-icon-gallery__cell-name">
                  {copied === name ? 'Copied!' : name.replace('Rounded', '')}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {Object.keys(filteredCategories).length === 0 && (
        <div className="raven-icon-gallery__empty">No icons found matching "{search}".</div>
      )}
    </div>
  );
}

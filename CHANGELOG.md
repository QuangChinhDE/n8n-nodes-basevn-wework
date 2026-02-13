# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-02-13

### Added
- Initial release of n8n-nodes-basevn-wework
- BaseVN - App Wework main node with 4 resources:
  - Project: create, edit, getFull, list
  - Task: create, createSubtask, edit, editExtra, get, listByProject, markDone, delete, addFollowers
  - Department: create, edit, get, list, remove
  - Tasklist: get
- BaseVN - App Wework Trigger node with 6 event types:
  - On Task Created
  - On Task Done
  - On Task Status Updated
  - On Subtask Created
  - On Subtask Done
  - On Subtask Status Updated
- Support for custom fields in task operations
- Flexible return data options for get/list operations

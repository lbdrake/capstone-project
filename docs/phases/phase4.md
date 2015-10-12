# Phase 4: Due Dates and Me View(1 day)

## Rails
### Models
* DueDate

### Controllers
* Api::DueDatesController (create, destroy, index, show, update)

### Views
* duedates/index.json.jbuilder

## Flux
### Views (React Components)
* DueDatesIndex
  - DueDateIndexItem
* DueDatesShow
* DueDatesForm

### Stores
* DueDate

### Actions
* ApiActions.receiveAllDueDates
* ApiActions.receiveDueDate
* ApiActions.deleteDueDate

### ApiUtil
* ApiUtil.fetchAllDueDates
* ApiUtil.fetchSingleDueDate
* ApiUtil.createDueDate
* ApiUtil.updateDueDate
* ApiUtil.destroyDueDate

## Gems/Libraries

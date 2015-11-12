# TaskMaster

[Go to TaskMaster site >][taskmaster]

[taskmaster]: http://www.taskmasterlist.com/

## Overview

TaskMaster is a team-based project management web application inspired by Basecamp built using Ruby on Rails
and React.js. TaskMaster allows users to work together toward a common goal, with features including:


- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete Projects, To Do Lists, and Tasks
- [ ] Share Projects with other Users
- [ ] Assign Tasks to other Users

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Project Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. The Project Model will
have a title and description. Before building out the front end, I will
begin by setting up a Postgres database and full JSON API for Projects.

[Details][phase-one]

### Phase 2: Flux Architecture and Project CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Project store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. At the end of Phase 2,
Projects can be created, read, edited and destroyed in the browser.

[Details][phase-two]

### Phase 3: To Do Lists and Tasks (2 days)

Phase 3 adds organization to the Project. Projects have many To Do Lists, and To Do Lists have many Tasks. Create JSON API for To Do Lists. Project authors can share projects with other Users. Tasks can also now be assigned
to Users.

[Details][phase-three]

### Phase 4: Due Dates and Me View (1 day)

Phase 4 introduces two new features. First, users can set due dates on tasks.
If the Tasks is not marked complete by the due date, the User will prompt
the User to review the Task. In addition, there will be a 'Me' view which will
show only the tasks assigned to the current user, ordered by due date.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1 day)

In Phase 5, I will add styling flourishes and several seed projects for demo users.

### Bonus Features (TBD)
- [ ] Search through Tasks for blocks of text
- [ ] Using quill.js, allow for complex styling of notes
- [ ] Implement a calendar feature to view all Tasks on a calendar by their due date
- [ ] Fuzzy search through every Project's content
- [ ] Changelogs for Projects

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md

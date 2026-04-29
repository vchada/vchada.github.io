# Publishing Each Project as an Individual GitHub Repository

Each folder under `projects/` is designed to become its own repository.

## Recommended Flow

```bash
cd projects/agentic-todo-copilot
git init
git add .
git commit -m "Initial working Spring Boot todo copilot"
git branch -M main
git remote add origin https://github.com/vchada/agentic-todo-copilot.git
git push -u origin main
```

Repeat for each project folder and change the repository name.

## Suggested Repository Names

- `agentic-todo-copilot`
- `smart-kanban-board`
- `rag-knowledge-hub`
- `ai-resume-screener`
- `ecommerce-order-api`
- `realtime-support-chat`
- `expense-insights-api`
- `inventory-microservice`
- `devops-release-dashboard`
- `interview-prep-agent`

## Suggested First Commit Pattern

Use a specific first commit for each project:

```bash
git commit -m "Initial working Spring Boot application"
```

After that, add smaller commits such as:

- `Add validation and error handling`
- `Add frontend workflow for task creation`
- `Add Dockerfile`
- `Add GitHub Actions build`
- `Add integration tests`

Small commits over time will make your learning progress visible on GitHub.

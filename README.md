# UI Component Library with Build Checks

## Overview
This project contains a UI component library built using React. It includes a Husky pre-commit hook that checks code formatting with Prettier, runs ESLint for linting, and executes all tests before allowing any code to be committed.

Additionally, the project is containerized with Docker, and it includes a CI pipeline using GitHub Actions to ensure that the same checks run in the GitHub repository.

## Pre-commit Checks
The following checks are run before committing:
- **Prettier**: Ensures code is properly formatted.
- **ESLint**: Runs linting on the codebase.
- **Tests**: Runs all unit tests.

If any of these checks fail, the commit will be blocked.

## CI/CD Pipeline
The project includes a GitHub Actions CI pipeline that runs the same checks whenever code is pushed or a pull request is created. This ensures that the codebase maintains its quality across environments.

## Docker Setup
To run the project locally using Docker:

1. Build the Docker container:
   ```
   docker build -t bhatti_ashbeel_coding_assignment13 .
   ```

2. Run the container:
   ```
   docker run -p 8018:8018 bhatti_ashbeel_coding_assignment13
   ```

3. Access the app in browser at `http://localhost:8018`.

## Commands
- `npm run lint`: Runs ESLint on the codebase.
- `npm run format-check`: Runs Prettier check.
- `npm test`: Runs all unit tests.

### To run Storybook locally and view the component library:
npm run storybook
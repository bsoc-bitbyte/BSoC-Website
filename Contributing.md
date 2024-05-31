# Contribution Guide 💻

We recommend you to do local setup in a Linux environment. We will soon update the readme for Windows setup.

If you're reading this, you're probably creating a Pull Request or planning to do so and that's great!🥳

# How to Contribute

1. Fork this repository.

2. Clone the forked repository.

   ```bash
    git clone https://github.com/<your_username>/BSoC-Website.git
   ```

3. Navigate to the project directory.

   ```bash
   cd BSoC-Website
   ```

4. Create a New Branch

   ```bash
   git checkout -b "New Branch name" 
   ```


5. Download Required Packages by running.

   ```bash
   npm i  
   ```

6. Start the Server by Running.

   ```bash
   npm run serve  
   ```

7. Make changes in source code.

7. Stage your changes and commit

   ```bash
   git add <filename>
   ```

8. Commit your changes

   ```bash
   git commit -m "<type>(optional_scope): <your_commit_message>"
   ```
   
   See [Conventional Commit Messages](#conventional-commit-messages) for convention

9. Push your local commits to the remote repo.

10. git push

11. Create a PR to develop repository.

# For Creating a New Pull Request 💡💻

1. Navigate to the repository's directory:

   ```bash
   cd <repository-directory>
   ```

2. Ensure you are on the branch you want to use as the base branch:

   ```bash
   git checkout <base-branch>
   ```

3. Create a new branch for your pull request:

   ```bash
   git branch <new-branch-name>
   ```

4. To Switch to New created branch

   ```bash
   git checkout -b <new-branch-name>
   ```
   
5. Stage and commit your changes:

   ```bash
   git add .
   git commit -m "Your commit message here"
   ```

6. Replace "Your commit message here" with a descriptive message that summarizes the changes you made, Make sure to follow the convention.

7. Push the new branch to the remote repository:

   ```bash
   git push origin <new-branch-name>
   ```
   
   This command pushes the new branch to the remote repository, making it available for others to see and review.

- On GitHub navigate to the repository and locate the "New Pull Request" button.

# Conventional Commit Messages

In our project, we follow the convention of using conventional commit messages for all commits. Conventional commit messages provide a standardized format for commit messages, making it easier to understand and track changes in our codebase.

A conventional commit message consists of a concise and structured format:

```
<type>(optional_scope): <your_commit_message>
```

The message includes a type and a description, separated by a colon. Here's a breakdown of each component:

Type: The type indicates the nature of the commit and should be selected from a predefined set of types that are relevant to the changes made. Some common types include:

- feat: for a new feature implementation.
- fix: for a bug fix.
- docs: for documentation changes.
- chore: for maintenance or general housekeeping tasks.
- test: for adding or modifying tests.
- refactor: for code refactoring without changing functionality.
- style: for code style changes (e.g., formatting, indentation).
- perf: for performance optimisations.

Description: The description provides a brief summary of the changes made in the commit. It should be concise but descriptive enough to understand the purpose of the commit.

### Example:

```bash
git commit -m "feat(frontend): Add navbar...."
```
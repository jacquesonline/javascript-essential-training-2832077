import subprocess
from datetime import datetime

def main():
    try:
        # Add all files to git
        subprocess.run(["git", "add", "."], check=True)

        # Commit with a message including the current date and time
        commit_message = f"Done for the day {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        subprocess.run(["git", "commit", "-m", commit_message], check=True)

        # Push the changes to the remote repository
        subprocess.run(["git", "push"], check=True)
        print("Changes successfully pushed to the remote repository.")
    except subprocess.CalledProcessError as e:
        # Print the error details
        print(f"An error occurred: {e}")
        print(f"Command: {e.cmd}")
        print(f"Return Code: {e.returncode}")
        if e.stdout:
            print(f"Output: {e.stdout.strip()}")
        if e.stderr:
            print(f"Error Output: {e.stderr.strip()}")

if __name__ == "__main__":
    main()
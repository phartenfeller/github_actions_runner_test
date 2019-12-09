FILE=/home/runner/actions-runner/run.sh
if test -f "$FILE" && id runner >/dev/null; then
  echo "Config found! Starting runner..."
  su - runner
  /home/runner/actions-runner/run.sh
else
  echo "No config found! Waiting..."

  tail -f /dev/null
fi

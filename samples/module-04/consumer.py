import json
from pathlib import Path
contract = json.loads(Path("contract.json").read_text())
print(contract["timeout_seconds"] * 1000)

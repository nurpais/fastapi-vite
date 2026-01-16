import json
from pathlib import Path

class ViteAssets:
    def __init__(self, dev_mode: bool = False):
        self.manifest = Path("static/dist/.vite/manifest.json")
        self.dev_url = "http://localhost:5173"
        self.dev_mode = dev_mode

    def _load_manifest(self) -> dict:
        with open(self.manifest, 'r') as f:
            return json.load(f)

    def tags(self, *entries: str) -> dict:
        all_entries = ["main"] + [e for e in entries if e != "main"]

        if self.dev_mode:
            scripts = [f'<script type="module" src="{self.dev_url}/@vite/client"></script>']
            scripts += [f'<script type="module" src="{self.dev_url}/src/{e}.ts"></script>' for e in all_entries]
            return {"scripts": "\n".join(scripts), "styles": ""}

        manifest = self._load_manifest()
        scripts, styles, = [], []
        seen = set()
        for entry in all_entries:
            key = f"src/{entry}.ts"
            if key not in manifest:
                continue
                
            data = manifest[key]
            file = data.get("file")
            
            if file and file not in seen:
                scripts.append(f'<script type="module" src="/static/dist/{file}"></script>')
                seen.add(file)
            
            for css in data.get("css", []):
                if css not in seen:
                    styles.append(f'<link rel="stylesheet" href="/static/dist/{css}">')
                    seen.add(css)
        
        return {"scripts": "\n".join(scripts), "styles": "\n".join(styles)}
        

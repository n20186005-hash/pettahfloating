# Lockfile

The existing committed pnpm-lock.yaml, package.json and pnpm-workspace.yaml are retained without dependency changes. Use pnpm 12.4.1 with Node 24.21.0 and a normal frozen install. The workspace explicitly permits esbuild/workerd native install scripts. Do not substitute a lock-only install or suppress those scripts for validation.

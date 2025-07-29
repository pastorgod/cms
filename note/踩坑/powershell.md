# powershell

## 打开限制模式

```bash
npm run dev
npm : 无法加载文件 d:\software\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135
170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
```

```powershell
PS C:\Users\Administrator\Desktop\WebServer\cms> Get-ExecutionPolicy
Restricted
PS C:\Users\Administrator\Desktop\WebServer\cms> Set-ExecutionPolicy Unrestricted
PS C:\Users\Administrator\Desktop\WebServer\cms> Get-ExecutionPolicy
Unrestricted
```

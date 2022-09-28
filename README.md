# serverless <br />

<br />
Practicing Serverless...
<br />
<ul>
<li>More info about framework <a href="https://www.serverless.com/">here</a></li>
</ul>

<br /><br />
#Setup
<br /><br />

<ul>
<li>npm install -g serverless</li>
<li>Download credentials for IAM user</li>
<li>serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET profile YOUR_USERNAME</li>
</ul>

<ul>
    <li>While create a SAM Application, if got an error like - Error: Unstable state when updating repo. Check that you have permissions to create/delete files in C, then</li>
    <li>Open powershell with elevated privileges, and run</li>
    <li>New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" ` -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force</li>
</ul>

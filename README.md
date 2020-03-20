# Chittr
This is my Year-3 Mobile Application Development project. This project is to help us mimic industry-level work, and will aid in the creation of our E-Portfolio. The app design itself is a platform for microblogging and such would allow the user (You) to interact with it too.

# 1. Functionality
In this app, the functionality comes from a pre built back-end API that was provided to us by our tutor. From this API, my goal was to implement as many endpoints from the API that I could have. For instance, the ability to POST a 'Chit'. This readme will cover each page that I have created in-depth, and will include a instruction guide on how to use the program.

# 2. Installation
If you **dont** have node.js installed, then carry on reading this section. Otherwise please move down to section [2.2](#here).
## 2.1 Installing [Chocolatey](https://chocolatey.org/docs/installation)
This package will simplify installing the necessary things needed to create a react-native app! If you are on an administrative account on your computer then enter the following lines into your desired terminal.
### CMD
Choose to input either command. (They're the same, just down to preference on how you want to copy them.)
```bash
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command " [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```
ExecutionPolicy Bypass -Command " [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

### PowerShell
Choose to input either command. (They're the same, just down to preference on how you want to copy them.)
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
## 2.2 Testing the installation worked
Please enter
```bash
choco
```
or
```bash
choco -?
```
in your terminal, and if installed, it will display the getting started instructions.
## here

const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'dist/win/InvictusRP-CAD-win32-x64/'),
    authors: 'Jack Hansen (Jack K-B)',
    noMsi: false,
    outputDirectory: path.join(outPath, 'dist/installers/windows-installer'),
    exe: 'InvictusRP-CAD.exe',
    setupExe: 'InvictusRP-CAD-Setup.exe',
    setupIcon: path.join(rootPath, 'images', 'icon.ico')
  })
}
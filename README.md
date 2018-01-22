# gpuoo

cmd in root (admin)
npm install

Usage
    -V, --version               output the version number
    -d, --disable <HID>         enable <HIDs>
    -e, --enable <HID>          disable <HIDs>
    -s, --status <HID>          status of <HIDs>
    -r, --restart <HID>         restart <HIDs>
    -c, --cron <command> <HID>  create cron with <command> and <HIDs>
    -h, --help                  output usage information
	
	
	
Example:
	Find gpu: 
		node app -s 'PCI\*'
	Disable:
		node app -d 'PCI\VEN_1002'
	Enable:
		node app -e 'PCI\VEN_1002'
	Restart
		node app -r 'PCI\VEN_1002'
	Start cron job that restarts gpu every second (default is 8 hours)
		node app -c 'PCI\VEN_1002' '* * * * *'
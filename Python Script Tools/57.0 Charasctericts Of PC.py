import platform 

def system_info():
	print(platform.system())
	print(platform.version())
	print(platform.machine())
	print(platform.uname())
	print(platform.platform())
	print(platform.processor())

system_info()
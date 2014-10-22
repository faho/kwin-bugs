print("clientList Test started");
try {
	var ws = workspace.clientList();
	for (i in ws) {
		print(ws[i].resourceClass.toString());
	}
} catch(err) {
	print("clientList Test: ",err);
}
print("clientList Test ended");

import QtQuick 2.0;
import org.kde.kwin 2.0;

Item {
    /* property variant tiling */
    Component.onCompleted: {
		console.log("pixmap Test started");
		workspace.clientAdded.connect(function(client) {
			print("client added: ", client.resourceClass.toString());
			if (client.resourceClass.toString() == "vlc") {
				print("VLC DETECTED");
				client.geometryShapeChanged.connect(function() {
					var rect = Qt.rect(0,0,100,100);
					client.geometry = rect;
				});
			};
		});
	}
}

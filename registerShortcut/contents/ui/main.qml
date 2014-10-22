import QtQuick 2.0;
import org.kde.kwin 2.0;

Item {
    Component.onCompleted: {
    try {
        registerShortcut();
    } catch(err) {
        print("BUG-registerShortcut: ", err);
    }
    }
    }
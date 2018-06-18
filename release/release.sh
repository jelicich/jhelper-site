#!/bin/bash

cd ..
npm run build
cd release

while [ 1 ]
do
	rsync -avzp --progress ../src/* fgabriel@adrg:~/jhelper.info
    if [ "$?" = "0" ] ; then
        echo "Done."
        exit
    else
        echo "Reconnecting..."
		sleep 3s
    fi
done

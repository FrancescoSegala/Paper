#!/bin/bash

JAVA_CMD=/usr/lib/jvm/adoptopenjdk-11-hotspot/bin/java

# set -x

#. log.sh



function start {
    echo "start application: Paper"
    TARGET=$(ls paper-*.jar | sort -r | head -1)
    echo "starting $TARGET"
    $JAVA_CMD -jar $TARGET --spring.config.name=application > paper.out 2> paper.err  &
}




function stop {
    echo "stop application: Paper"
    PID=$(ps aux | awk ' $13 ~/^paper.*jar/ {print $2}')
    echo "PID : $PID"
   if [ -z $PID ]
   then
    echo "no running Paper application found!"
    exit
   fi
   kill -9 $PID
}

function restart {
    stop ;
    sleep 5 ;
    start ;
    sleep 5 ;
    test ;
}

function log {
    tail paper.out -f
}

function process {
    ps aux | grep paper | grep -v grep
}

function test {
    curl http://localhost:6503/api/config > /dev/null
    if [ $? == 0 ]
    then
        cat paper.out | grep com.eng.paper.Main
        echo "Application is running"
    else
        echo "Application not running !!!"
    fi
}


function GeCoHelp {
    echo "usage $0 COMMAND  ";
    echo
    echo "COMMAND in : "
    echo "  start  : start the application"
    echo "  stop   : stop the application"
    echo "  rotate : call the log rotation routne"
    echo "  log   : open the log"
    echo "  ps   : shows whether the application is still running"
    echo "  test   : test whether the application is responding"
    echo "  restart   : restart the application"
    echo "  help   : this message"
    exit;
}



case "$1" in
    start ) start
    ;;
    stop ) stop
    ;;
    rotate ) rotate
    ;;
    log ) log
    ;;
    restart ) restart
    ;;
    test ) test
    ;;
    ps ) process
    ;;
    * ) GeCoHelp
esac

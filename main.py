import  time
from plyer import notification
while True:
    notification.notify(
        title="Arert !!",
        message="demo",
        timeout=5
    )
    time.sleep(20)
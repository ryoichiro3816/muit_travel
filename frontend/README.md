# search API 
## request
``{
    "prefecture": "string"
    "event_type": "string",
    "inn_type": "string"
}``

## response
```
{
    "spot":[
        {
            "event_name": "string",
            "trafic": "string",
            "arive_time": "hh:mm",
            "leave_time": "hh:mm",
            "img_url": "string"
        },
        {
            "event_name": "string",
            "trafic": "string",
            "arive_time": "hh:mm",
            "leave_time": "hh:mm",
            "img_url": "string"
        },
    ]
}
```

import json
import boto3
from datetime import date


def lambda_handler(event, context):

    client = boto3.client("ce")

    today = date.today()

    start_date = today.replace(day=1).isoformat()
    end_date = today.isoformat()

    response = client.get_cost_and_usage(
        TimePeriod={
            "Start": start_date,
            "End": end_date
        },
        Granularity="MONTHLY",
        Metrics=["UnblendedCost"]
    )

    cost = response["ResultsByTime"][0]["Total"]["UnblendedCost"]

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "monthlyCost": cost["Amount"],
            "unit": cost["Unit"]
        })
    }

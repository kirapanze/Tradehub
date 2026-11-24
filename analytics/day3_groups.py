import pandas as pd
requests=pd.DataFrame([

{"product":"phone","quantity":10},
{"product":"Laptop","quantity":6},
{"Product":"phone","quantity":15},

])

print(requests.groupby("product")["quantity"].sum())

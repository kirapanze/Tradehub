import pandas as pd 

requests=[
    {"country":"Burundi","product":"phone","quantity":20},
    {"country":"Rwanda","product":"phone","quantity":35},
    {"country":"Burundi", "product":"Laptop","quantity":5},
]

df= pd.DataFrame(requests)
print(df.head())
print(df.groupby("Country")["quantity"].sum())

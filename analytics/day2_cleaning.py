import pandas as pd

records = [
    {"country": "Burundi", "quantity": 10},
    {"country": "Rwanda", "quantity": 20},
    {"country": "Rwanda", "quantity": 20},  # duplicate
    {"country": "Kenya", "quantity": -3},  # invalid quantity
    {"country": None, "quantity": 5}  # missing country
]
df=pd.DataFrame(records)
print("Before cleaning:\n",df)
print("Missing Values:\n",df.isna().sum)

clean = df.drop_duplicates()
clean = clean.dropna(subset=["country"])
clean = clean[clean["quantity"]>0]
print("After cleaning:\n",clean)
print("country totals:\n", clean.groupby("country")["quantity"].sum())
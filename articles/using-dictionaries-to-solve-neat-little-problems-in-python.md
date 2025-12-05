---
date: "2025-12-05"
title: "Using Dictionaries to Solve Neat Little Problems in Python"
description: "Let me show you a few tricks i've learnt over the years where I use dictionaries to solve interesting simple problems in python."
---

# Using Dictionaries to Solve Neat Little Problems in Python

Let me show you a few tricks I have learnt over the years where I use
python dictionaries to solve interesting simple problems in python.

## 1. Simplifying Several If statements

Suppose you have several cases, and you want to call a function for each case,
the naive approach would be to write several if statements for each case.
Using dictionaries, you can pack the functions in a dictionary and access
them with a key.

### Example

Imagine a scenario where you want to have a user model with several
user types, and you want when one profile type is requested to return
fields relevant to that profile.

#### Setup

Let us start by setting up the serializers for the various profile types.

```
class GenericProfileSerializer:
    """Return all user fields."""
    pass

class ProfileTypeASerializer:
    """Return fields relevant to profile type A"""
    pass

class ProfileTypeBSerializer:
    """Return fields relevant to profile type B"""
    pass

class ProfileTypeCSerializer:
    """Return fields relevant to profile type C"""
    pass
```

Then, lets define a class with a method that receives a request object
and returns a response, like in Django.

```
class UserListView()
    def get(request):
        profile_type = request.query_params.get("profile_type")
```

#### Naive Solution

The naive solution to this problem would be to write several if statements
to handle each profile type.

```
class UserListView()
    serializer_class = GenericProfileSerializer

    def get(request):
        profile_type = request.query_params.get("profile_type")

        if profile_type == "a":
            self.serializer_class = ProfileTypeASerializer
        elif profile_type == "b":
            self.serializer_class = ProfileTypeBSerializer
        elif profile_type == "c":
            self.serializer_class = ProfileTypeCSerializer
```

#### A better solution implemented with a dictionary

To improve this code, we first pack the serializers into a dictionary. The key of
each item in the dictionary is a profile type, and the value is the serializer
for that profile type.

```
profile_serializers_dict = {
    "a": ProfileTypeASerializer,
    "b": ProfileTypeBSerializer,
    "c": ProfileTypeCSerializer,
}
```

Then, use the dictionary to pick the correct serializer at runtime and use the
generic serializer as a fallback.

```
class UserListView()
    serializer_class = GenericProfileSerializer

    def get(request):
        profile_type = request.query_params.get("profile_type")

        self.serializer_class = profile_serializers_dict.get(
            profile_type, GenericProfileSerializer
        )
```

This approach keeps the view clean an simple, and when you inevitable want to
add more serializers for new profile types, you just define the serializer for the
profile type and add it to the dictionary. This works without needing to change
the View.

## 2. Optimize Nested Loops

## 3. Optimize Database Operations

### Example 1: Multiple database calls

in a loop, when you have a list, and you want to perfom some operation on the
list that requires fetching from a database, you can fetch in bulk, pack the
results in an dictionary and access then in constant time.

suppose you had a list of products that you wanted to upload in bulk.

#### Setup

Lets start by defining two pseudo functions, one the gets one product given a product id,
and another that gets a list of products given a list of ids

```
def get_product(id: int) -> Product:
    """Assume this function needs to get the product from the database."""
    return Product


def get_products(ids: list[int]) -> list(Product):
    """This function gets all  """
    products = Product.objects.filter(id__in=ids)
```

#### Naive Approach

The naive approach of doing this would for to fetch a product

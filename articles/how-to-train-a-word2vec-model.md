---
date: "2024-09-07"
title: "How to Train a Word2vec Model"
description: "In this article, I'll show you how to train a Word2vec model using custom data. You can then use the trained model to perform tasks such as similarity search or powering a recommendation engine."
---

# How to Train a Word2vec Model

In this article, I'll show you how to train a Word2vec model using custom data. You can then use the trained model to perform tasks such as similarity search or powering a recommendation engine.

## What is Word2vec

Word2vec is a family of model architectures and optimizations that can be used to learn word embeddings from large datasets. See this
[documentation](https://www.tensorflow.org/text/tutorials/word2vec)
to learn more about Word2vec and how you can use it.

## Prepare The Training Data

To train a Word2vec model, you will need data. The data will typically be a
list of lists of tokens. We will call this list of lists of tokens, sentences.
Each sentence in the collection of sentences will consist of a list of tokens.
Therefore, the majority of the work will be preparing the sentences.
For large datasets, Word2vec’s documentation recommends that you stream
the list directly from disk or network. This improves the memory
efficiency of the function. To achieve this, we will create a python
generator that streams one sentence at a time from the disk. See this
[python’s wiki](https://wiki.python.org/moin/Generators) to learn more
about generators and how to use them.

Using a generator is memory efficient because we’re not loading the
whole dataset in memory at once. Instead, we are loading chunks of 1000
rows and tokenizing and returning only one row at a time. It is also
important to note that the generator function is wrapped inside a custom
iterator class. This is because you can only iterate once over a
generator. Introducing the class wrapper ensures that the Word2vec
model can efficiently iterate over the dataset as many times as it
would like.

### Initial setup

Import the necessary packages and setup the django environment

```

import os
import sys
import re
import time
import multiprocessing
import pandas as pd
from gensim.models import Word2Vec
from transformers import BertTokenizer
from tdqm import tdqm


# Setup the django environment

MAIN_DIR = os.path.dirname(os.path.dirname(__file__))
sys.path.append(MAIN_DIR)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "PROJECT.settings")
import django

django.setup()

```

### Streaming the data

```
# This class encapsulates all the logic required to stream one tokenized sentence at a time.

class Corpus:
    def __init__(self) -> None:

        # pre-compiles the regex for better performance.
        self.cleaner = re.compile("[^a-zA-Z0-9]")

        # Initializers BertTokenizer. We use Bert Tokenizer to
        # tokenize the sentence to get a list of tokens.

        self.tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
        self.path = os.path.join(MAIN_DIR, "BooksDatasetClean.csv")

    def __iter__(self):
        # The presence of a dunder iter method on our class means
        # that you can iterate over an object instantiated from this class.

        # The dunder iter method iterates over the iterator object returned
        # by calling our generator function and yields the elements in the
        # iterable. We wrap tqdm around our iterator object to get progress
        # updates. See tqdm's documentation to learn more about it. (https://tqdm.github.io/)

        for sentence in tqdm(self.sentences(), desc="Processing sentences")
            yield sentence

    # define a sentence generator called sentences. A generator looks
    # like a normal python function, but with one key difference.
    # A generator yields an item in a collection instead of returning
    # the entire collection like a function would.

    def sentences(self, chunk_size=1000):

        # read a chunk of the dataset from disk and start a for loop
        # to iterate over the chunk.

        for chunk in pd.read_csv(self.path, chunksize=chunk_size):

            # uses the dataframe’s iterrows method to lazily iterate over
            # each item in the dataframe

            for _, row in chunk.iterrows():

                # extract attributes from each row.
                title = row["Title]
                authors = row["Authors]
                description = row["Description"]
                category = row["Category"]
                publisher = row["Publisher"]

                # creates a sentence from the attributes
                sentence = f"{title} {authors} {description} {category} {publisher}"

                # cleans the sentence with the pre compiled regex
                sentence = self.cleaner.sub(" ", sentence)

                # tokenize the sentence with tokenizer instance
                tokenized_sentence = self.tokenizer.tokenize(sentence)

                # yield the tokenized sentence
                yield tokenized_sentence

```

## Training the model

After preparing the data, we can now use the tokenized sentences to train
the Word2vec model.

```
if __name__ == "__main__":

    # Save the current time. This is used to track how long it takes the
    # script to run.

    start_time = time.time()

    # instantiates an iterable object from the custom iterable class
    # called Corpus

    corpus_iterable = Corpus()

    # is where the actual training happens. To train the model, we
    # instantiate the Word2Vec class and pass parameters to the
    # class's constructor function. The parameters are as follows:


    w2v = Word2Vec(
        # A list of lists of tokens
        sentences=corpus_iterable,

        # Dimensionality of the word vectors
        vector_size=100,

        # maximum distance between the current word and the predicted
        # word within a sentence
        window=5,

        workers=multiprocessing.cpu_count(),

        # Number of iterations over the corpus
        epochs=10,

        # the number of times a word has to appear in the corpus to be
        # included in the models library
        min_count=4,
    )

    # save two versions of the  model do disk, the binary and the text version.
    model_name = "word2vec.model"
    path = os.path.join(MAIN_DIR, model_name)
    w2v.wv.save_word2vec_format(f"{path}.txt", binary=False)

    end_time = time.time()
    duration = end_time - start_time
    print(f"Completed in {duration} seconds.")
```

## Conclusion

Training a Word2vec model involves preparing the dataset by efficiently
reading the dataset from disk, and passing data to the model’s constructor
function. Finally, the model can be saved to disk and later loaded by
an application that intends to use it.

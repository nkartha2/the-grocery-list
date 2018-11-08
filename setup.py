from distutils.core import setup

setup(
    # Application Name
    name="Shekly",

    version="0.1.0",

    author="neely kartha",

    #Packages
    packages=["app"],

    description="a healthy meal plan and grocery list",

    # Dependent packages
    install_requires=[
        "flask"
    ]
)
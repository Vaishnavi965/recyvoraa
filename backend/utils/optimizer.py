def optimize(category):
    rules = {
        "organic": "Composting or bio-gas plant",
        "plastic": "Recycle at PET/HDPE facility",
        "paper": "Dry paper recycling unit",
        "metal": "Scrap metal processing",
        "glass": "Glass remelting plant"
    }
    return rules.get(category, "Manual inspection required")

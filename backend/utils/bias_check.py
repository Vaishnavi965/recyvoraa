def bias_check(confidence):
    if confidence < 0.6:
        return "Low confidence – request multiple images to reduce bias"
    return "Confidence acceptable"

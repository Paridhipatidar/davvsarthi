def calculate_probability(rank, last_rank):
    if rank <= last_rank:
        return 85
    elif rank <= last_rank * 1.2:
        return 60
    elif rank <= last_rank * 1.5:
        return 35
    else:
        return 10

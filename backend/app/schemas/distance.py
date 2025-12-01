from pydantic import BaseModel

class DistanceResponse(BaseModel):
    distance_km: float      # 거리 (km)
    duration_min: float     # 소요 시간 (분)
import json
import math
import tempfile
import unittest
from pathlib import Path

import tao_star_positioning as tao


HERE = Path(__file__).resolve().parent


class StargazingPositioningTests(unittest.TestCase):
    def test_ground_point_matches_v02_data(self):
        config = json.loads((HERE / "sample_observation.json").read_text(encoding="utf-8"))
        star = tao.parse_star(config["stars"][0])
        latitude, longitude = tao.ground_point(star)
        self.assertAlmostEqual(latitude, 45.3503333333, places=8)
        self.assertAlmostEqual(longitude, 177.4025833333, places=8)

    def test_sample_reproduces_v02_focal_length(self):
        config = json.loads((HERE / "sample_observation.json").read_text(encoding="utf-8"))
        result = tao.analyze(config)
        self.assertAlmostEqual(result["focal"]["mean_px"], 554.4845386794, places=6)
        self.assertEqual(result["focal"]["valid_pair_count"], 3)
        self.assertEqual(len(result["candidates"]), 6)

    def test_sample_finds_three_point_cluster(self):
        config = json.loads((HERE / "sample_observation.json").read_text(encoding="utf-8"))
        result = tao.analyze(config)
        cluster = result["selected_cluster"]
        self.assertIsNotNone(cluster)
        self.assertEqual(cluster["size"], 3)
        self.assertTrue(33.0 < cluster["latitude"] < 34.2)
        self.assertTrue(114.8 < cluster["longitude"] < 115.7)

    def test_outputs_are_project_local(self):
        config = json.loads((HERE / "sample_observation.json").read_text(encoding="utf-8"))
        result = tao.analyze(config)
        with tempfile.TemporaryDirectory() as tmp:
            target = Path(tmp) / "result"
            tao.write_outputs(result, target)
            self.assertTrue((target / "result.json").exists())
            self.assertTrue((target / "candidates.csv").exists())


if __name__ == "__main__":
    unittest.main()
package com.example.backend.controller;

import com.example.backend.dto.GameRecordDTO;
import com.example.backend.service.GameRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/score")
public class GameRecordController {

    @Autowired
    private GameRecordService gameRecordService;

    @PostMapping
    public ResponseEntity<GameRecordDTO> createGameRecord(@RequestBody GameRecordDTO gameRecordDTO) {
        return ResponseEntity.ok(gameRecordService.createGameRecord(gameRecordDTO));
    }
    @GetMapping
    public List<GameRecordDTO> getAllGameRecords() {
        return gameRecordService.getAllGameRecords();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<GameRecordDTO> updateGameRecordUsername(
            @PathVariable Long id,
            @RequestBody GameRecordDTO gameRecordDTO) {
        return ResponseEntity.ok(gameRecordService.updateGameRecordUsername(id, gameRecordDTO));
    }

    @DeleteMapping("/{id}")
    public void deleteGameRecord(@PathVariable Long id) {
        gameRecordService.deleteGameRecord(id);
    }
}

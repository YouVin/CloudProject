package com.example.backend.controller;

import com.example.backend.dto.GameRecordDTO;
import com.example.backend.service.GameRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GameRecordController {

    @Autowired
    private GameRecordService gameRecordService;

    @RequestMapping("/score")
    public List<GameRecordDTO> createGameRecord(){
        return gameRecordService.getAllGameRecords();
    }
//    @GetMapping("/{id}")
//    public ResponseEntity<GameRecordDTO> getGameRecordById(@PathVariable Long id) {
//        return ResponseEntity.ok(gameRecordService.getGameRecordById(id));
//    }
//    @GetMapping
//    public ResponseEntity<List<GameRecordDTO>> getAllGameRecords() {
//        return ResponseEntity.ok(gameRecordService.getAllGameRecords());
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<GameRecordDTO> updateGameRecord(@PathVariable Long id, @RequestBody GameRecordDTO gameRecordDTO) {
//        return ResponseEntity.ok(gameRecordService.updateGameRecord(id, gameRecordDTO));
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteGameRecord(@PathVariable Long id) {
//        gameRecordService.deleteGameRecord(id);
//        return ResponseEntity.noContent().build();
//    }
}

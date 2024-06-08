package com.example.backend.service;

import com.example.backend.dto.GameRecordDTO;

import java.util.List;

public interface GameRecordService {
    GameRecordDTO createGameRecord(GameRecordDTO gameRecordDTO);
    List<GameRecordDTO> getAllGameRecords();
    GameRecordDTO updateGameRecordUsername(Long id, GameRecordDTO gameRecordDTO);
    void deleteGameRecord(Long id);
}

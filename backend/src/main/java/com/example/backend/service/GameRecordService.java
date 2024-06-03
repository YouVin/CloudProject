package com.example.backend.service;

import com.example.backend.dto.GameRecordDTO;

import java.util.List;

public interface GameRecordService {
    GameRecordDTO createGameRecord(GameRecordDTO gameRecordDTO);
    GameRecordDTO getGameRecordById(Long id);
    List<GameRecordDTO> getAllGameRecords();
    GameRecordDTO updateGameRecord(Long id, GameRecordDTO gameRecordDTO);
    void deleteGameRecord(Long id);
}

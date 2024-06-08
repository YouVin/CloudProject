package com.example.backend.service;

import com.example.backend.dto.GameRecordDTO;
import com.example.backend.entity.GameRecord;
import com.example.backend.repository.GameRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameRecordServiceImpl implements GameRecordService{

    @Autowired
    private GameRecordRepository gameRecordRepository;

    @Override
    public GameRecordDTO createGameRecord(GameRecordDTO gameRecordDTO) {
        GameRecord gameRecord = new GameRecord();
        gameRecord.setUsername(gameRecordDTO.getUsername());
        gameRecord.setScore(gameRecordDTO.getScore());
        gameRecord.setDate(gameRecordDTO.getDate());
        gameRecord = gameRecordRepository.save(gameRecord);
        return new GameRecordDTO(gameRecord.getId(), gameRecord.getUsername(), gameRecord.getScore(), gameRecord.getDate());
    }


    @Override
    public List<GameRecordDTO> getAllGameRecords() {
        return gameRecordRepository.findAll().stream()
                .map(gameRecord -> new GameRecordDTO(gameRecord.getId(), gameRecord.getUsername(), gameRecord.getScore(), gameRecord.getDate()))
                .collect(Collectors.toList());
    }

    public GameRecordDTO updateGameRecordUsername(Long id, GameRecordDTO gameRecordDTO) {
        GameRecord gameRecord = gameRecordRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Game record not found with id: " + id));

        gameRecord.setUsername(gameRecordDTO.getUsername());
        GameRecord updatedRecord = gameRecordRepository.save(gameRecord);

        return new GameRecordDTO(updatedRecord.getId(), updatedRecord.getUsername(), updatedRecord.getScore(), updatedRecord.getDate());
    }

    @Override
    public void deleteGameRecord(Long id) {
        gameRecordRepository.deleteById(id);
    }
}
